
using TemplateNet6.Domain.Entities;

namespace TemplateNet6.Application.UseCase
{
    public interface IDepartamentoUseCase
    {
        Task<List<Departamento>> GetAllDepartmentAsync(int idEmpresa);
    }
}
