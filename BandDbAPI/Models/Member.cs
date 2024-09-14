using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BandDbAPI.Models
{
    public class Member
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? MiddleName { get; set; }
        public string? KnownAs { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public DateOnly DateOfDeath { get; set; }
        public int Age { get; set; }
        public List<Role>? Roles { get; set; }
        public Origin? OriginObj { get; set; }
        private bool IsComplete { get; set; }
    }
}