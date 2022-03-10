//Using JQuery for showing Divs on button press
$(document).ready(function(){
  $("#try").click(function(){
  $("button").show();
  });
}); 

$(document).ready(function(){
  $("#try").click(function(){
  $("#input").show();
  
  });
}); 

$(document).ready(function(){
  $("#button").click(function(){
  $("#result").show();
  
  });
}); 

$(document).ready(function(){
  $("#button").click(function(){
  $("#table").show();
  
  });
}); 

//Slider functionality

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
} 



