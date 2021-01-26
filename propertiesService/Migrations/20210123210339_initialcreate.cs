using Microsoft.EntityFrameworkCore.Migrations;

namespace propertiesService.Migrations
{
    public partial class initialcreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "storeProperties",
                columns: table => new
                {
                    propertyId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    propertyName = table.Column<string>(type: "TEXT", nullable: true),
                    propertyLocation = table.Column<string>(type: "TEXT", nullable: true),
                    propertyOwner = table.Column<string>(type: "TEXT", nullable: true),
                    propertyPrice = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_storeProperties", x => x.propertyId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "storeProperties");
        }
    }
}
