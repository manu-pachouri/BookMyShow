using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using System.Collections.Generic;
using backend.Models.DbModels;
using backend.Services.AppService;
using backend.Models.ViewModels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("bookmyshow")]
    [ApiController]
    public class BMSController : ControllerBase
    {
        public BMSController(IAppService appService, IConfiguration configuration,
                             IMapper mapper)
        {
            this._appService = appService;
            this._mapper = mapper;
        }

        private IAppService _appService { get; }
        private readonly IMapper _mapper;

        [Route("movies")]
        public IEnumerable<MovieViewModel> GetMovies()
        {
            return this._appService.GetMovies();
        }

        [Route("movies/{id}/details")]
        public Movie GetMovieDetail(int id)
        {
            return this._appService.GetMovieDetail(id);
        }

        [Authorize]
        [Route("movies/{id}/theatres")]
        public IEnumerable<Theatre> GetTheatres(int id)
        {
            return this._appService.GetTheatres(id);
        }

        [Authorize]
        [Route("movies/theaters/{id}/seats")]
        public IEnumerable<SeatViewModel> GetSeats(int id)
        {
            return this._appService.GetSeats(id);
        }

        [Authorize]
        [Route("movies/{id:int}/theaters/{theaterId:int}/seats/{username}")]
        public void PostSeatBookingDetails(int id,int theaterId,string userName,List<int> Seatids)
        {
            this._appService.BookSeats(id, theaterId, userName, Seatids);
        }

        [Authorize]
        [Route("movies/mybookings/tickets/{username}")]
        public IEnumerable<TicketViewModel> GetTickets(string username)
        {
            return this._appService.GetTickets(username);
        }

        [Authorize]
        [Route("movies/mybookings/tickets/cancel")]
        public void PostTicketCancellationDetails([FromBody] int id)
        {
            this._appService.CancelTicket(id);
        }

        [Authorize(Roles = "Admin")]
        [Route("movies/add")]
        public void PostMovieDetails([FromBody] Movie movie)
        {
            this._appService.AddMovie(movie);
        }

        
        [Authorize(Roles = "Admin")]
        [Route("movies/delete/{id}")]
        public void DeleteMovie(int id)
        {
            this._appService.DeleteMovie(id);
        }

        
        [Authorize(Roles = "Admin")]
        [Route("adminpanel/tickets")]
        public List<TicketViewModel> GetAllTickets()
        {
            return this._appService.GetAllTickets();
        }
    }
}
