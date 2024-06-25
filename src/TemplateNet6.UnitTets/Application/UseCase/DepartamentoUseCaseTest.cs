using NSubstitute;
using TemplateNet6.Application.InterfacesRepositories;
using TemplateNet6.Application.UseCase;
using TemplateNet6.Domain.Entities;
using TemplateNet6.Infrastructure.Repositories;

namespace TemplateNet6.UnitTets.Application.UseCase
{
    [TestClass]
    public class DepartamentoUseCaseTest
    {
        private IDepartamentoRepository _departamentoRepository;

        [TestInitialize]
        public void Setup()
        {
            _departamentoRepository = Substitute.For<IDepartamentoRepository>();
        }


        [TestMethod]
        public async Task GetAllDepartmentAsync_deberia_ejecutar_el_metodo_para_obtener_datos()
        {
            // Arrange
            int idEmpresa = 1;
            var DepartamentoUseCase = GetDepartamentoUseCase();

            // Act
            await DepartamentoUseCase.GetAllDepartmentAsync(idEmpresa);

            // Assert
            await _departamentoRepository.Received(1).GetAllDepartmentAsync(idEmpresa);
        }



        private DepartamentoUseCase GetDepartamentoUseCase()
        {
            return new DepartamentoUseCase(_departamentoRepository);
        }

    }
}