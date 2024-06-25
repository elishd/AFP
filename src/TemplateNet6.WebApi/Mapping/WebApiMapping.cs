using AutoMapper;
using TemplateNet6.Domain.Entities;
using TemplateNet6.WebApi.Models.Response.Departamento;
using TemplateNet6.WebApi.Models.Response.Empresa;

namespace TemplateNet6.WebApi.Mapping
{
    public class WebApiMapping : Profile
    {
        #region CONSTRUCTOR
        public WebApiMapping()
        {
            CreateMap<EmpresaSelectResponse, Empresa>().ReverseMap();
            CreateMap<DepartamentoSelectResponse, Departamento>().ReverseMap();
        }



        #endregion
    }
}
