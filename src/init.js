$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data("dancer");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new BlinkyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      10
    );
    $('.dancefloor').append(dancer.$node);

    window.dancers.push(dancer);
  });

$(".lineUp").on("click", function(event){
  var xStart = 280;
  var xEnd = 1000;
  var increment = 700/(window.dancers.length);

  $(".dancefloor").text("");

  for(var i = 0; i < window.dancers.length; i++){
    window.dancers[i].jiggle = 0;
    window.dancers[i].top = 420
    window.dancers[i].left = xStart

    window.dancers[i].setPosition(this.top, this.left)
    xStart+=increment;
    $('.dancefloor').append(window.dancers[i].$node);
  }
})

$(".battle").on("click", function(event){

  $(".lineUp").click();
  var poke1Index = Math.floor(Math.random() * window.dancers.length);
  var possibleIndex = Math.floor(Math.random() * window.dancers.length);
  while (possibleIndex === poke1Index){
    possibleIndex = Math.floor(Math.random() * window.dancers.length);
  }
  var poke2Index = possibleIndex;

    window.dancers[poke1Index].top = 259
    window.dancers[poke1Index].left = 398
    window.dancers[poke1Index].setPosition(this.top, this.left)


    window.dancers[poke2Index].top = 259
    window.dancers[poke2Index].left = 840
    window.dancers[poke2Index].setPosition(this.top, this.left)

    window.poke1Index = poke1Index;
    window.poke2Index = poke2Index;
})

window.onkeypress = function(event){
  if (event.keyCode == 119) {
      window.dancers[poke1Index].moveUp();
  }
  if (event.keyCode == 115) {
      window.dancers[poke1Index].moveDown();
  }
  if (event.keyCode == 97) {
      window.dancers[poke1Index].moveLeft();
  }
  if (event.keyCode == 100) {
      window.dancers[poke1Index].moveRight();
  }
}



});

