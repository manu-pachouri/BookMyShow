using PetaPoco;
using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Models.DbModels
{
    [TableName("Movies")]
    [PrimaryKey("Id",AutoIncrement =true)]
    public class Movie
    {
        [Column]
        public int Id { get; set; }
        [Column]
        public string ImageUrl { get; set; }
        [Column]
        [Required]
        public string Title { get; set; }
        [Column]
        [Required]
        public decimal Price { get; set; }
        [Column]
        public string Description { get; set; }
        [Column]
        public string Language { get; set; }
        [Column]
        [Range(0, 5)]
        public int Rating { get; set; }//out of five
        [Column]
        public DateTime FromTime { get; set; }
        [Column]
        public DateTime ToTime { get; set; }
    }
}
