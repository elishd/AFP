using log4net;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;

namespace TemplateNet6.WebApp.Controllers
{
    public class HomeController : Controller
    {
        #region ATTRIBUTES
        private readonly ILog _log;
        private readonly IHttpClientFactory _httpClientFactory;
        #endregion

        #region CONSTRUCTOR
        public HomeController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
            _log = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);
        }
        #endregion

        #region METHODS
        public async Task<ActionResult> Index()
        {           
            return View();
        }


        #endregion
    }
}
