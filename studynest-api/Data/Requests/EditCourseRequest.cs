namespace studynest_api.Data.Requests;

public class EditCourseRequest
{
    public int CourseId { get; set; }
    public string Title { get; set; } = "";
    public string Description { get; set; } = "";
}
