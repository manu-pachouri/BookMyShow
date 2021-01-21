using PetaPoco;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShow.Models.DbModels
{
    [TableName("Theatres")]
    [PrimaryKey("Id")]
    public class Theatre
    {
        [Column]
        public int Id { get; set; }
        [Column]
        [Required]
        public string TheaterName { get; set; }
    }
}
