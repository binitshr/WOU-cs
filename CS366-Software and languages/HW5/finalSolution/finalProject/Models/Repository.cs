using System.Collections.Generic;
namespace finalProject.Models
{
  public static class Repository
  {
    static List<GuestResponse> responses = new List<GuestResponse>();

    public static IEnumerable<GuestResponse> Responses
    {
      get => responses;
    }

    public static void AddResponse(GuestResponse response)
    {
      responses.Add(response);
    }
  }
}