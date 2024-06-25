using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TemplateNet6.Application.InterfacesServices;
using TemplateNet6.Application.UseCase;
using TemplateNet6.Domain.Constants;
using TemplateNet6.WebApi.Models.Request.Empresa;
using TemplateNet6.WebApi.Models.Response;
using TemplateNet6.WebApi.Models.Response.Empresa;

namespace TemplateNet6.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresaController : Controller
    {
        #region ATRIBUTES
        private readonly IEmpresaUseCase _EmpresaUseCase;
        private readonly ILoggerService _loggerService;
        private readonly IMapper _mapper;
        #endregion

        #region CONSTRUCTOR
        public EmpresaController(IEmpresaUseCase clienteUseCase, ILoggerService loggerService, IMapper mapper)
        {
            _EmpresaUseCase = clienteUseCase ?? throw new ArgumentNullException(nameof(clienteUseCase));
            _loggerService = loggerService ?? throw new ArgumentNullException(nameof(loggerService));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }
        #endregion

        #region METHODS
        [HttpPost]
        public async Task<IActionResult> GetEmpresaAsync(GetEmpresaRequest empresa)
        {
            try
            {
                var dato = _mapper.Map<EmpresaSelectResponse>(await _EmpresaUseCase.GetEmpresaAsync(empresa.IdEmpresa));
                return Ok(new ResposeGeneric(ResponseCodeConstant.EXITO, dato));
            }
            catch (Exception ex)
            {
                _loggerService.ErrorObj(LoggerConstant.ERROR_DESCONOCIDO, new { empresa.IdEmpresa }, ex);
                return StatusCode(StatusCodes.Status500InternalServerError, new ResposeGeneric(ResponseCodeConstant.ERROR.Codigo, $"Ha ocurrido un error en: GetEmpresaAsync({empresa.IdEmpresa})"));
            }
        }

        
        #endregion
    }
}
