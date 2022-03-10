using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using HW4Project.Models;


namespace HW4Project.Controllers
{
     public class InterpolatorController : Controller
    {
        public string Color1;
        public string Color2;
        public int Num;

        public ActionResult Index()
        {


            return View();
        }

        public ActionResult CreateChart()
        {
            return View();
        }
        [HttpPost]
        public ActionResult CreateChart(string C1, string C2, int Num)
        {


            Color color1 = ColorTranslator.FromHtml(C1);
            Color color2 = ColorTranslator.FromHtml(C2);

            double hue1;
            double sat1;
            double val1;

            ColorToHSV(color1, out hue1, out sat1, out val1);


            double hue2;
            double sat2;
            double val2;

            ColorToHSV(color2, out hue2, out sat2, out val2);


            Num--;

            double tempH = (hue2 - hue1) / Num;

            double tempS = (sat2 - sat1) / Num;

            double tempV = (val2 - val1) / Num;


            IList<string> colorList = new List<string>();

            for (int i = 0; i < Num + 1; i++)
            {
                Color tempColor = ColorFromHSV(hue1 + tempH*i, sat1 + tempS*i, val1+ tempV*i);

                colorList.Add(ColorTranslator.ToHtml(tempColor));
            }

            ViewBag.Success = true;

            ViewBag.List = colorList;

            return View();
        
        
        }


        public static void ColorToHSV(Color color, out double hue, out double saturation, out double value)
        {
            int max = Math.Max(color.R, Math.Max(color.G, color.B));
            int min = Math.Min(color.R, Math.Min(color.G, color.B));

            hue = color.GetHue();
            saturation = (max == 0) ? 0 : 1d - (1d * min / max);
            value = max / 255d;
        }


        public static Color ColorFromHSV(double hue, double saturation, double value)
        {
            int hi = Convert.ToInt32(Math.Floor(hue / 60)) % 6;
            double f = hue / 60 - Math.Floor(hue / 60);

            value = value * 255;
            int v = Convert.ToInt32(value);
            int p = Convert.ToInt32(value * (1 - saturation));
            int q = Convert.ToInt32(value * (1 - f * saturation));
            int t = Convert.ToInt32(value * (1 - (1 - f) * saturation));

            if (hi == 0)
                return Color.FromArgb(255, v, t, p);
            else if (hi == 1)
                return Color.FromArgb(255, q, v, p);
            else if (hi == 2)
                return Color.FromArgb(255, p, v, t);
            else if (hi == 3)
                return Color.FromArgb(255, p, q, v);
            else if (hi == 4)
                return Color.FromArgb(255, t, p, v);
            else
                return Color.FromArgb(255, v, p, q);
        }



    }
}
        
