using System.ComponentModel.DataAnnotations.Schema;

namespace Stargate.Server.Models
{
    public class PersonViewModel
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public bool Astronaut { get; set; } = false;
    }
}
