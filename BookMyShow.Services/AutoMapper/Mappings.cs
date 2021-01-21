using AutoMapper;
using BookMyShow.Models.DbModels;
using BookMyShow.Models.ViewModels;

namespace BookMyShow.Models.Mappings
{
    public class MappingsProfile : Profile
    {
        public MappingsProfile()
        {
            CreateMap<Movie,MovieViewModel>();
            CreateMap<Seat, SeatViewModel>();
        }
    }
}