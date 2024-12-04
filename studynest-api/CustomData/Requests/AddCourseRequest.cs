using System.Diagnostics;

namespace studynest_api.CustomData.Requests;

public class AddCourseRequest
{
    public string Title { get; set; } = "";
    public string Description { get; set; } = "";
    public bool IsPrivate { get; set; }
    public string UserEmail { get; set; } = "";
}
