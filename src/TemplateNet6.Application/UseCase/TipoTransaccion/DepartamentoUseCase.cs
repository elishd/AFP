
using TemplateNet6.Application.InterfacesRepositories;
using TemplateNet6.Domain.Entities;

namespace TemplateNet6.Application.UseCase
{
    public class DepartamentoUseCase: IDepartamentoUseCase
    {
        #region ATTRIBUTES
        private readonly IDepartamentoRepository _tipoTransaccionRepository;
        #endregion

        #region CONSTRUCTOR
        public DepartamentoUseCase(IDepartamentoRepository tipoTransaccionRepository)
        {
            _tipoTransaccionRepository = tipoTransaccionRepository ?? throw new ArgumentNullException(nameof(tipoTransaccionRepository));
        }
        #endregion

        #region METHODS
        public async Task<List<Departamento>> GetAllDepartmentAsync(int idEmpresa)
        {
            return await _tipoTransaccionRepository.GetAllDepartmentAsync(idEmpresa);
        }

        #endregion

    }
}
