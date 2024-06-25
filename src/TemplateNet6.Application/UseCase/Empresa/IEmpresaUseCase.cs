
using TemplateNet6.Domain.Entities;

namespace TemplateNet6.Application.UseCase
{
    public interface IEmpresaUseCase
    {
        Task<Empresa> GetEmpresaAsync(int idEmpresa);
    }
}
