using log4net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Reflection;
using TemplateNet6.WebApp.Extensions;
using TemplateNet6.WebApp.Models;
using TemplateNet6.WebApp.Models.Empresa;

namespace TemplateNet6.WebApp.Controllers
{
    public class EmpresaController : Controller
    {
        #region ATRIBUTOS
        private readonly ILog _log;
        private readonly IHttpClientFactory _httpClientFactory;
        #endregion

        #region CONSTRUCTOR
        public EmpresaController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
            _log = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);
        }
        #endregion

        #region METODOS
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<ActionResult> Table()
        {
            List<SelectEmpresas> datos = new();
            try
            {
                GetEmpresaRequest getEmpresaRequest = new GetEmpresaRequest();
                getEmpresaRequest.IdEmpresa = 1;

                var resultado = await ServiceExtension.ExcuteAPI<Resultado>(_httpClientFactory, "API", "Empresa", ServiceExtension.POST, getEmpresaRequest);
                datos.Add(resultado.ToObjet<SelectEmpresas>());
            }
            catch (Exception ex)
            {
                _log.Error(ex.Message, ex);
            }

            return View(datos);
        }

        public string GetErrorsModel(ModelStateDictionary ModelState)
        {
            string errors = string.Join("</br>", ModelState
                   .Where(x => x.Value.Errors.Count > 0)
                   .Select(x => new { m = x.Key + ":" + string.Join("</br>", x.Value.Errors.Select(m => m.ErrorMessage)) })
                   .Select(x => x.m));

            return errors;
        }

        #endregion
    }
}
