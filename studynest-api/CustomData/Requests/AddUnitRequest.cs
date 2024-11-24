namespace studynest_api.CustomData.Requests;

public class AddUnitRequest
{
    public string Title { get; set; } = null!;
    public int CourseId { get; set; }
}
