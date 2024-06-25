using Dapper;
using System.Data;
using TemplateNet6.Application.InterfacesRepositories;
using TemplateNet6.Application.InterfacesServices;
using TemplateNet6.Domain.Entities;

namespace TemplateNet6.Infrastructure.Repositories
{
    public class DepartamentoRepository : IDepartamentoRepository
    {
        #region ATTRIBUTES
        private readonly IDbConnectionService _dbConnectionService;
        #endregion

        #region CONSTRUCTOR
        public DepartamentoRepository(IDbConnectionService dbConnectionService)
        {
            _dbConnectionService = dbConnectionService ?? throw new ArgumentNullException(nameof(dbConnectionService));
        }
        #endregion

        #region METHODS


        public async Task<List<Departamento>> GetAllDepartmentAsync(int idEmpresa)
        {
            using var connection = _dbConnectionService.OpenConnection();

            var parameters = new DynamicParameters();
            parameters.Add("@IdEmpresa", idEmpresa);

            return (await connection.QueryAsync<Departamento>("ConsultarDepartamentoPorEmpresa", parameters, commandType: CommandType.StoredProcedure)).ToList();

        }
        #endregion

    }
}
