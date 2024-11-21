namespace studynest_api.CustomData.Requests;

public class UpdateTaskTimeRequest
{
    public int TaskId { get; set; }
    public int Hours { get; set; }
    public int Minutes { get; set; }
}
