using PetaPoco;

namespace BookMyShow.Models.DbModels
{
    [TableName("Seats")]
    [PrimaryKey("Id")]
    public class Seat
    {
        [Column]
        public int Id { get; set; }
        [Column]
        public bool Occupied { get; set; } = false;
        [Column]
        public int TheaterId { get; set; }
    }
}
