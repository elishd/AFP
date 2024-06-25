using System.ComponentModel.DataAnnotations;

namespace TemplateNet6.WebApi.Models.Request.Departamento
{
    public class GetDepartamentoRequest
    {
        [Required(ErrorMessage = "El campo {0} es requerido.")]
        public int IdEmpresa { get; set; }
    }
}
