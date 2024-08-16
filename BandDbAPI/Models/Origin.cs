using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BandDbAPI.Models
{
    public class Origin
    {
        public int Id { get; set; }
        public string? City { get; set; }
        public string? Country { get; set; }
    }
}