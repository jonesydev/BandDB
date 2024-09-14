using System;
using Microsoft.EntityFrameworkCore;

namespace BandDbAPI.Models;

public class BandDbContext : DbContext
{
    public BandDbContext(DbContextOptions<BandDbContext> options)
        : base(options)
    {
    }

    public DbSet<Album> Albums { get; set; } = null!;

    public DbSet<Band> Bands { get; set; } = null!;

    public DbSet<Influence> Influences { get; set; } = null!;

    public DbSet<Label> Labels { get; set; } = null!;

    public DbSet<Member> Memberss { get; set; } = null!;

    public DbSet<Origin> Origins { get; set; } = null!;

    public DbSet<Role> Roles { get; set; } = null!;
}
