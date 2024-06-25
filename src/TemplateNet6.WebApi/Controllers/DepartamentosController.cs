using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TemplateNet6.Application.InterfacesServices;
using TemplateNet6.Application.UseCase;
using TemplateNet6.Domain.Constants;
using TemplateNet6.WebApi.Models.Request.Departamento;
using TemplateNet6.WebApi.Models.Response;
using TemplateNet6.WebApi.Models.Response.Departamento;

namespace TemplateNet6.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartamentosController : Controller
    {
        #region ATRIBUTES
        private readonly IDepartamentoUseCase _EmpresaUseCase;
        private readonly ILoggerService _loggerService;
        private readonly IMapper _mapper;
        #endregion

        #region CONSTRUCTOR
        public DepartamentosController(IDepartamentoUseCase tipoTransaccionUseCase, ILoggerService loggerService, IMapper mapper)
        {
            _EmpresaUseCase = tipoTransaccionUseCase ?? throw new ArgumentNullException(nameof(tipoTransaccionUseCase));
            _loggerService = loggerService ?? throw new ArgumentNullException(nameof(loggerService));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }
        #endregion

        #region METHODS
        [HttpPost]
        public async Task<IActionResult> GetAllDepartmentAsync(GetDepartamentoRequest codigo)
        {
            try
            {
                var dato = _mapper.Map<List<DepartamentoSelectResponse>>(await _EmpresaUseCase.GetAllDepartmentAsync(codigo.IdEmpresa));
                return Ok(new ResposeGeneric(ResponseCodeConstant.EXITO, dato));
            }
            catch (Exception ex)
            {
                _loggerService.ErrorObj(LoggerConstant.ERROR_DESCONOCIDO, new { Codigo = codigo }, ex);
                return StatusCode(StatusCodes.Status500InternalServerError, new ResposeGeneric(ResponseCodeConstant.ERROR.Codigo, $"Ha ocurrido un error en: GetById({codigo})"));
            }
        }

      

    
        #endregion
    }
}
