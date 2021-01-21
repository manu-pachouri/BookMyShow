namespace BookMyShow.Models.ViewModels
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
