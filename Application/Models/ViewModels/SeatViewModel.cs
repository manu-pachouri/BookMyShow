using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models.ViewModels
{
    public class SeatViewModel
    {
        public int Id { get; set; }
        public bool Occupied { get; set; } = false;
        public int TheaterId { get; set; }
    }
}
