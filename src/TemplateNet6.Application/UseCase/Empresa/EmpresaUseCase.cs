
using TemplateNet6.Application.InterfacesRepositories;
using TemplateNet6.Domain.Entities;

namespace TemplateNet6.Application.UseCase
{
    public class EmpresaUseCase: IEmpresaUseCase
    {

        #region ATTRIBUTES
        private readonly IEmpresaRepository _clienteRepository;
        #endregion
    
        #region CONSTRUCTOR
        public EmpresaUseCase(IEmpresaRepository clienteRepository)
        {
            _clienteRepository = clienteRepository ?? throw new ArgumentNullException(nameof(clienteRepository));
        }
        #endregion

        #region METHODS
 
        public async Task<Empresa> GetEmpresaAsync(int idEmpresa)
        {
            return await _clienteRepository.GetEmpresaAsync(idEmpresa);
        }
        #endregion
    }
}
