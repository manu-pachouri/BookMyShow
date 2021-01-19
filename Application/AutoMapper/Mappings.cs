using AutoMapper;
using backend.Models.DbModels;
using backend.Models.ViewModels;

namespace backend.Models.Mappings
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