
using TemplateNet6.Domain.Entities;

namespace TemplateNet6.Application.InterfacesRepositories
{
    public interface IEmpresaRepository
    {
        Task<Empresa> GetEmpresaAsync(int idEmpresa);
    }
}
