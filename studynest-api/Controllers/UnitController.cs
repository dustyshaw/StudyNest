using Microsoft.AspNetCore.Mvc;
using studynest_api.CustomData.Requests;
using studynest_api.Services;

namespace studynest_api.Controllers;

[ApiController]
[Route("[controller]")]
public class UnitController : Controller
{
    private readonly IUnitService unitService;

    public UnitController(IUnitService unitService)
    {
        this.unitService = unitService;
    }

    [HttpPost("/unit/addUnit")]
    public async Task<bool> AddUnit(AddUnitRequest addUnitRequest)
    {
        return await unitService.AddUnit(addUnitRequest);
    }

    [HttpPatch("/unit/editunit")]
    public async Task<bool> EditUnit(EditUnitRequest editUnitRequest)
    {
        return await unitService.EditUnit(editUnitRequest);
    }
}
