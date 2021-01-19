using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models.ViewModels
{
    public class TicketViewModel
    {
        public int Id { get; set; }
        public string MovieTitle { get; set; }
        public int SeatId { get; set; }
        public string TheaterName { get; set; }
        public string ImageUrl { get; set; }
    }
}
