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
    public class RsvpController: Controller
    {
        [HttpGet]
        public ViewResult rsvp()
        {
            return View();
        }

        [HttpGet]
        public ViewResult RsvpForm()
        {
            return View();
        }

        [HttpPost]
        public ViewResult RsvpForm(GuestResponse guestResponse)
        {
        if (ModelState.IsValid) {
            Repository.AddResponse(guestResponse);
            return View("Notification", guestResponse);
        } else {
           
            return View();
        }
        }

      public ViewResult ListResponses()
        {
            return View(Repository.Responses.Where(r => r.Attendance == true));
        }
        
    }
}