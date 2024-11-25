using Microsoft.EntityFrameworkCore;
using Velora_Back.Models;

namespace Velora_Back.DataContext
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<UsuarioModel> Usuarios { get; set; }
    }
}
