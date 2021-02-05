using Microsoft.EntityFrameworkCore;

namespace propertiesService.Entities
{
        public class propertyContext : DbContext
    {
        //Constructor sin parametros
        public propertyContext()
        {
    
        }
        public propertyContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<storeProperty>().ToTable("storeProperties");
        }

        //Sobreescribimos el metodo OnConfiguring para hacer los ajustes que queramos en caso de
        //llamar al constructor sin parametros
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //En caso de que el contexto no este configurado, lo configuramos mediante la cadena de conexion
            if (!optionsBuilder.IsConfigured)
            {
                   optionsBuilder.UseSqlite("Filename=MyDatabase.db");
                     base.OnConfiguring(optionsBuilder);
            }
            
        }
        public virtual DbSet<storeProperty>  storeProperties { get; set; }

    }

}