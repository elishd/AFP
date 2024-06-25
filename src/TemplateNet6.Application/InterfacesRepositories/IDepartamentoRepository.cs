
using TemplateNet6.Domain.Entities;

namespace TemplateNet6.Application.InterfacesRepositories
{
    public interface IDepartamentoRepository
    {
        Task<List<Departamento>> GetAllDepartmentAsync(int idEmpresa);
    }
}
