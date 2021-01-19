using PetaPoco;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models.DbModels
{
   [TableName("Tickets")]
   [PrimaryKey("Id")]
   public class Ticket
    {
        [Column]
        public int Id { get; set; }
        [Column]
        public string UserId { get; set; }
        [Column]
        public int MovieId { get; set; }
        [Column]
        public int TheatreId { get; set; }
        [Column]
        public int SeatId { get; set; }
    }
}
