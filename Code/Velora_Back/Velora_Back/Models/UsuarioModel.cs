using System.ComponentModel.DataAnnotations;
using Velora_Back.Enums;

namespace Velora_Back.Models
{
    public class UsuarioModel
    {
        [Key]
        public int IdUsuario { get; set; }
        public String Nome { get; set; }
        public String Email { get; set; }
        public String Senha { get; set; }
        public PerfilEnum Perfil { get; set; }
    }
}
