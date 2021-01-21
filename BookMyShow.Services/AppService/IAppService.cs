using BookMyShow.Models.DbModels;
using BookMyShow.Models.ViewModels;
using System.Collections.Generic;

namespace BookMyShow.Services.AppService
{
    public interface IAppService
    {
        public IEnumerable<MovieViewModel> GetMovies();
        public Movie GetMovieDetail(int id);
        public IEnumerable<Theatre> GetTheatres(int id);
        public IEnumerable<SeatViewModel> GetSeats(int id);
        public void BookSeats(int id, int TicketId, string userId, List<int> ids);
        public IEnumerable<TicketViewModel> GetTickets(string username);
        public void CancelTicket(int id);
        public void AddMovie(Movie movie);
        public List<TicketViewModel> GetAllTickets();
        public void DeleteMovie(int id);

    }
}
