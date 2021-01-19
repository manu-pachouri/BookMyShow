using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class ticketmodelchange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "username",
                table: "Tickets",
                newName: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Tickets",
                newName: "username");
        }
    }
}
