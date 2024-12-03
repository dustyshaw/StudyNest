using studynest_api.CustomData;

namespace studynest_api.Services;

public interface IStatsService
{
    public Task<List<StatsReport>> GetUserStats(string userEmail);
}
