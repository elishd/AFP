using Newtonsoft.Json;

namespace TemplateNet6.WebApp.Models
{
    public class Resultado
    {
        [JsonProperty("codigo")]    
        public int Codigo { get; set; }
        [JsonProperty("mensaje")]
        public string? Mensaje { get; set; }
        [JsonProperty("datos")]
        public object? Datos { get; set; }

        public T ToObjet<T>()
        {
            var jsonSerializerSettings = new JsonSerializerSettings
            {
                CheckAdditionalContent = true,
                TypeNameHandling = TypeNameHandling.None,
                MissingMemberHandling = MissingMemberHandling.Error
            };

            return JsonConvert.DeserializeObject<T>(Datos.ToString(), jsonSerializerSettings);
        }
    }
}
