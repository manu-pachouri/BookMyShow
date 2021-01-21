using PetaPoco;

namespace BookMyShow.Models.DbModels
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
