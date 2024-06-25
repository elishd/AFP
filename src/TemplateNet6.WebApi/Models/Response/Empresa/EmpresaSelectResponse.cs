namespace TemplateNet6.WebApi.Models.Response.Empresa
{
    public class EmpresaSelectResponse
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string RazonSocial { get; set; }
        public string Documento { get; set; }
        public string TipoDocumento { get; set; }
        public char TipoPersona { get; set; }
        public DateTime FechaRegistro { get; set; }
        public string UsuarioRegistra { get; set; }
        public string UsuarioModifica { get; set; }
        public DateTime? FechaModificacion { get; set; }

    }
}
