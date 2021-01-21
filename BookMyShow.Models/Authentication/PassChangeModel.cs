namespace BookMyShow.Models.Authentication
{
    public class PassChangeModel
    {
        public string UserName { get; set; }
        public string CurrentPass { get; set; }
        public string NewPass { get; set; }
    }
}
