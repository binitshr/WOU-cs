using System.ComponentModel.DataAnnotations;
namespace finalProject.Models
{
    public class Potlock
    {   
        [Required(ErrorMessage = "Please enter your name")]
        public string Name {get; set;} 

        [Required(ErrorMessage = "What category is your food item?")]
        public string Category {get; set;}

        [Required(ErrorMessage = "Please enter what your food item is")]
        public string Item {get; set;}
        
        [Required(ErrorMessage = "Enter the serving amount you are planning to bring")]
        
        public string Serving {get; set;}

        [Required(ErrorMessage = "Please tell us if your food needs to be reheated")]
        public bool? Reheating {get; set;}

    }
}