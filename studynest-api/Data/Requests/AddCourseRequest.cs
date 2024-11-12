using System.Diagnostics;

namespace studynest_api.Data.Requests;

public class AddCourseRequest
{
    public string Title { get; set; } = "";
    public string Description { get; set; } = "";
}
