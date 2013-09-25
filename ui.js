$(document).ready(function() {
  for (var i=1; i<13; i++){
    if (i%4 == 0){
      $(".border").append("<div class='clear'></div>")
    } else {
      $(".border").append("<div class='left'></div>")
    }
  }

});