using NSubstitute;
using TemplateNet6.Application.InterfacesRepositories;
using TemplateNet6.Application.UseCase;
using TemplateNet6.Domain.Entities;

namespace TemplateNet6.UnitTets.Application.UseCase
{
    [TestClass]
    public class EmpresaUseCaseTest
    {
        private IEmpresaRepository _empresaRepository;

        [TestInitialize]
        public void Setup()
        {
            _empresaRepository = Substitute.For<IEmpresaRepository>();
        }

        [TestMethod]
        public async Task InsertAsync_Deberia_crear_TipoTransaccionExistos()
        {
            // preparacion
            int idEmpresa = 1;
            var empresaUseCase = GetEmpresaUseCase();

            // Accion o prueba
            await empresaUseCase.GetEmpresaAsync(idEmpresa);

            // Validacion de resultado
            await _empresaRepository.Received(1).GetEmpresaAsync(idEmpresa);
        }


        private EmpresaUseCase GetEmpresaUseCase()
        {
            return new EmpresaUseCase(_empresaRepository);
        }

    }
}
