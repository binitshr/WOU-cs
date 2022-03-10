using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace HW4Project.Models
{
    public class InterpolatorModel
    {    
    
        public string first { get; set; }
        
        public string second { get; set; }

       
        public int num { get; set; }

        
         public List<string> colors{ get; set;}
    }
}