using Microsoft.AspNetCore.Mvc;
using studynest_api.CustomData;
using studynest_api.Services;

namespace studynest_api.Controllers;

[ApiController]
[Route("[controller]")]
public class StatsController
{
    private readonly IStatsService statsService;
    public StatsController(IStatsService statsService)
    {
        this.statsService = statsService;
    }

    [HttpGet]
    public async Task<List<StatsReport>> GetStatsReports (string userEmail)
    {
        return await statsService.GetUserStats(userEmail);
    }
}
