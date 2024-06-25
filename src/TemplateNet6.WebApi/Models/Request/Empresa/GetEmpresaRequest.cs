using System.ComponentModel.DataAnnotations;

namespace TemplateNet6.WebApi.Models.Request.Empresa
{
    public class GetEmpresaRequest
    {
 
        [Required(ErrorMessage = "El campo {0} es requerido.")]
        public int IdEmpresa { get; set; }
    }
}
