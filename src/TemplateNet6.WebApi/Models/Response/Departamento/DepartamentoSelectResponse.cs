using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TemplateNet6.WebApi.Models.Response.Departamento
{
    public class DepartamentoSelectResponse
    {
        public string Nombre { get; set; }
        public int Nivel { get; set; }
        public int totalEmpleados { get; set; }
    }
}
