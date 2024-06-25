using System.Text.Json.Serialization;

namespace TemplateNet6.WebApp.Models.Empresa
{
    public class SelectEmpresas
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }
        [JsonPropertyName("nombre")]
        public string Nombre { get; set; }
        [JsonPropertyName("razonSocial")]
        public string RazonSocial { get; set; }
        [JsonPropertyName("documento")]
        public string Documento { get; set; }
        [JsonPropertyName("tipoDocumento")]
        public string TipoDocumento { get; set; }
        [JsonPropertyName("tipoPersona")]
        public char TipoPersona { get; set; }
        [JsonPropertyName("fechaRegistro")]
        public DateTime FechaRegistro { get; set; }
        [JsonPropertyName("usuarioRegistra")]
        public string UsuarioRegistra { get; set; }
        [JsonPropertyName("usuarioModifica")]
        public string UsuarioModifica { get; set; }
        [JsonPropertyName("fechaModificacion")]
        public DateTime? FechaModificacion { get; set; }
    }
}
