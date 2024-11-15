using studynest_api.CustomData.Requests;

namespace studynest_api.Services;

public interface IUnitService
{
    public Task<bool> AddUnit(AddUnitRequest addUnitRequest);
}
