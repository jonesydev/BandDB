using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BandDbAPI.Models
{
    public class Influence
    {
        public int Id { get; set; }
        public Member? MemberObj { get; set; }
        private bool IsMember { get; set; }
    }
}