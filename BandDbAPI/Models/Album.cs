using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BandDbAPI.Models
{
    public class Album
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int Year { get; set; }
        public DateOnly Date { get; set; }
        public List<Member>? Personnel { get; set; }


    }
}