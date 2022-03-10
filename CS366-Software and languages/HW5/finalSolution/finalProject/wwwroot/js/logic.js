//Using JQuery for showing Divs on button press
function showhide() 
{  
    var div = document.getElementById("activity1");  
    if (div.style.display !== "none") {  
        div.style.display = "none";  
    }  
    else {  
        div.style.display = "block";  
    }  
}  