namespace studynest_api.Data.Requests;

public class AddUserRequest
{
    public string UserName { get; set; } = "";
    public string Email { get; set; } = "";
    public string AuthId { get; set; } = "";
}
