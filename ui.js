
$(document).ready(function() {
  var $main = $(".border");

  for (var i=0; i<3; i++){
    for (var j = 0; j < 3; j++) {
      var newDiv = $("<div class='left'></div>");
      newDiv.attr("data-id", [i, j]);
      $main.append(newDiv);
    }
    $main.append("<div class='clear'></div>")
  }


  $main.on("click", "div.left", function (event){
    var $square = $(event.currentTarget);
    symbol = TTT.turn($square.attr("data-id"))
    $square.addClass(symbol)
      .off("click")
      .html("<p class='align'>" + symbol + "</p>")


    if (TTT.winner()) {
      $main.off('click');
      alert(symbol + " wins");
    }
  })

  function endUI() {};
});