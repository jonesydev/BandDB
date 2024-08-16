using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BandDbAPI.Models
{
    public class Band
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public List<Member> Personnel { get; set; }
        public int Year { get; set; }
        public Origin OriginObj { get; set; }

    }
}