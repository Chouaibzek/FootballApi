using Microsoft.AspNetCore.Mvc;

namespace FootballAPI.Controllers
{
     [ApiController]
    [Route("api/[controller]")]
    public class TeamsController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private const string ApiToken = "859bfa1b1cf64c0591a285e9dce6ac03";

        public TeamsController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet("{teamId}/matches")]
        public async Task<IActionResult> GetTeamMatches(int teamId)
        {
            var client = _httpClientFactory.CreateClient();
            var request = new HttpRequestMessage(
                HttpMethod.Get,
                $"https://api.football-data.org/v4/teams/{teamId}/matches"
            );
            request.Headers.Add("X-Auth-Token", ApiToken);

            var response = await client.SendAsync(request);
            if (!response.IsSuccessStatusCode)
            {
                return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
            }

            var content = await response.Content.ReadAsStringAsync();
            return Content(content, "application/json");
        }
    }
}