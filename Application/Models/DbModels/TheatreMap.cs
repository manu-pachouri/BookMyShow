using PetaPoco;

namespace backend.Models.DbModels
{
    [TableName("TheatreMap")]
    [PrimaryKey("Id")]
    public class Map
    {
        [Column]
        public int Id { get; set; }
        [Column]
        public int TheatreId { get; set; }
        [Column]
        public int MovieId { get; set; }
    }
}
