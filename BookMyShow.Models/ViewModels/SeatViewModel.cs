namespace BookMyShow.Models.ViewModels
{
    public class SeatViewModel
    {
        public int Id { get; set; }
        public bool Occupied { get; set; } = false;
        public int TheaterId { get; set; }
    }
}
