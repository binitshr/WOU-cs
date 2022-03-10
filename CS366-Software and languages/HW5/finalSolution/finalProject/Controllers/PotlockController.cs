using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using finalProject.Models;
namespace finalProject.Controllers
{
    public class PotlockController: Controller
    {
        
        [HttpGet]
        public ViewResult PotlockForm()
        {
            return View();
        }

        public ViewResult PotlockForm( Potlock potlock)
        {
            if (ModelState.IsValid) {
                FoodMenu.AddPotlock(potlock);
                return View("PotlockConfirmation");
            } else {
            
                return View();
            }
        }

         public ViewResult PotlockConfirmation()
        {
            return View();
        }
  
    }
}