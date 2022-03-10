using System.ComponentModel.DataAnnotations;
namespace finalProject.Models
{
    public class GuestResponse
    {   
        [Required(ErrorMessage = "Please enter your name")]
        public string Name {get; set;} 

        [Required(ErrorMessage = "Please let us know what department you work in!")]
        public string Department {get; set;}

        [Required(ErrorMessage = "Please enter your email address")]
        [RegularExpression(".+\\@.+\\..+",
                       ErrorMessage = "Please enter a valid email address")]
        public string Email {get; set;}
        
        [Required(ErrorMessage = "Please enter your phone number")]
        
        public string Phone {get; set;}

        [Required(ErrorMessage = "Please specify your attendance!")]
        public bool? Attendance {get; set;}

    }
}