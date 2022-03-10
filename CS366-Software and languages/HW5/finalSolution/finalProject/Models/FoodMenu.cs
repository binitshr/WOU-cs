using System.Collections.Generic;
namespace finalProject.Models
{
  public static class FoodMenu
  {
    static List<Potlock> foodItems = new List<Potlock>();

    public static IEnumerable<Potlock> Foodlist
    {
      get => foodItems;
    }

    public static void AddPotlock(Potlock foodentry)
    {
      foodItems.Add(foodentry);
    }
  }
}