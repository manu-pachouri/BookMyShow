using AutoMapper;
using BookMyShow.Models.DbModels;
using BookMyShow.Models.ViewModels;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace BookMyShow.Services.AppService
{
    public class AppService : IAppService
    {
        public AppService(IConfiguration configuration,IMapper mapper)
        {
            this.ConnectionString = configuration.GetConnectionString("BookMyShowDb1");
            this._mapper = mapper;
        }

        private string ConnectionString{get;}
        private IMapper _mapper { get; }
        private string providerName = "System.Data.SqlClient";

        public IEnumerable<MovieViewModel> GetMovies()
        {
            using(var db = new PetaPoco.Database(ConnectionString,providerName))
            {
                IEnumerable<Movie> Movies = db.Fetch<Movie>("select * from Movies");
                return _mapper.Map<List<MovieViewModel>>(Movies);
            }
        }

        public void BookSeats(int MovieId, int TheaterId, string userId, List<int> Seatids)
        {
            using (var db = new PetaPoco.Database(ConnectionString,providerName))
            {
                for (int i = 0; i < Seatids.Count; i++)
                {
                    var seat = db.SingleOrDefault<Seat>(Seatids[i]);
                    seat.Occupied = true;
                    db.Update(seat);

                    db.Insert(new Ticket
                    {
                        MovieId = MovieId,
                        TheatreId = TheaterId,
                        UserId = userId,
                        SeatId = Seatids[i]
                    });
                }
            }
        }

        public Movie GetMovieDetail(int id)
        {
            using(var db = new PetaPoco.Database(ConnectionString,providerName))
            {
                Movie movie = db.SingleOrDefault<Movie>(id);
                return movie;
            }
           
        }

        public IEnumerable<SeatViewModel> GetSeats(int id)
        {
            using (var db = new PetaPoco.Database(ConnectionString,providerName))
            {
                var Seats = db.Fetch<Seat>("select * from BookMyShowDb1.dbo.Seats s where s.TheaterId = @0", id);
                return _mapper.Map<IEnumerable<SeatViewModel>>(Seats);
            }
        }

        public IEnumerable<Theatre> GetTheatres(int id)
        {
            using var db = new PetaPoco.Database(ConnectionString,providerName);
            var cmd = new PetaPoco.Sql(";EXEC BookMyShowDb1.dbo.GetTheatres @@movieId = @0",id);
            var Theatres = db.Fetch<Theatre>(cmd);
            return Theatres;
            
        }

        public IEnumerable<TicketViewModel> GetTickets(string userid)
        {
            using (var db = new PetaPoco.Database(ConnectionString,providerName))
            {
                var cmd = new PetaPoco.Sql(";EXEC BookMyShowDb1.dbo.GetUserTickets @@userid = @0",userid);
                var Tickets = db.Fetch<TicketViewModel>(cmd);
                return Tickets;
            }
        }

        public void CancelTicket(int id)
        {
            using (var db = new PetaPoco.Database(ConnectionString,providerName))
            {
                List<int> SeatIds = db.Fetch<int>("SELECT SeatId from Tickets where Id = @0",id);
                for(int i=0;i<SeatIds.Count;i++)
                {
                    var Seat = db.SingleOrDefault<Seat>(SeatIds[i]);
                    Seat.Occupied = false;
                    db.Update(Seat);
                }
                db.Delete<Ticket>(id);
            }
        }

        public void AddMovie(Movie movie)
        {
            using (var db = new PetaPoco.Database(ConnectionString,providerName))
            {
                db.Insert(movie);
            }
        }

        public List<TicketViewModel> GetAllTickets()
        {
            using (var db = new PetaPoco.Database(ConnectionString,providerName))
            {
                var cmd = new PetaPoco.Sql(";EXEC BookMyShowDb1.dbo.GetAllTickets");
                List<TicketViewModel> Tickets = db.Fetch<TicketViewModel>(cmd);
                return Tickets;
            }
        }

        public void DeleteMovie(int id)
        {
            using (var db = new PetaPoco.Database(ConnectionString,providerName))
            {
                var Movie = db.SingleOrDefault<Movie>(id);
                if (Movie != null)
                {
                    db.Delete(Movie);
                }
            }
        }
    }
}
