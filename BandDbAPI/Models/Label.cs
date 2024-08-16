using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BandDbAPI.Models
{
    public class Label
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int Year { get; set; }
        public List<Member> Artists { get; set; }
        public List<Album> Albums { get; set; }
        public bool IsActive { get; set; }
        public Origin OriginObj { get; set; }
        public int YearDefunct { get; set; }
    }
}