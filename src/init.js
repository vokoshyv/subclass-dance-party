$(document).ready(function(){
  window.dancers = [];

  var audio = {};

  audio['theme'] = new Audio();
  audio['theme'].src = 'music/theme.mp3';
  audio['theme'].autoplay = true;

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
    window.dancers[i].top = 390
    window.dancers[i].left = xStart

    window.dancers[i].setPosition(this.top, this.left)
    xStart+=increment;
    $('.dancefloor').append(window.dancers[i].$node);
    $('.dancefloor').addClass('animated wobble');
  }
})

$(".battle").on("click", function(event){

    audio['theme'].pause();
    if(!audio['battle']){
      audio['battle'] = new Audio();
      audio['battle'].src = 'music/battle.mp3';
      audio["battle"].play();
    }

  $(".lineUp").click();

  // $("#"+poke1Index).removeClass('animated zoomInDown');
  // $("#"+poke2Index).removeClass('animated zoomInDown');

  var poke1Index = Math.floor(Math.random() * window.dancers.length);
  var possibleIndex = Math.floor(Math.random() * window.dancers.length);
  while (possibleIndex === poke1Index){
    possibleIndex = Math.floor(Math.random() * window.dancers.length);
  }
  var poke2Index = possibleIndex;

    window.dancers[poke1Index].top = 229
    window.dancers[poke1Index].left = 398
    window.dancers[poke1Index].setPosition(this.top, this.left)


    window.dancers[poke2Index].top = 229
    window.dancers[poke2Index].left = 840
    window.dancers[poke2Index].setPosition(this.top, this.left)

    window.poke1Index = poke1Index;
    window.poke2Index = poke2Index;
  // $("#"+poke1Index).addClass('animated zoomInDown');
  // $("#"+poke2Index).addClass('animated zoomInDown');


})

window.onkeypress = function(event){
  if (event.keyCode == 119) {
    this.bool = false;
    window.dancers[poke1Index].moveUp();
  }
  else if (event.keyCode == 115) {
    this.bool = false;
    window.dancers[poke1Index].moveDown();
  }
  else if (event.keyCode == 97) {
    this.bool = false;
    window.dancers[poke1Index].moveLeft();
  }
  else if (event.keyCode == 100) {
    this.bool = false;
    window.dancers[poke1Index].moveRight();
  }
  else if (event.keyCode == 105) {
    this.bool = false;
    window.dancers[poke2Index].moveUp();
  }
  else if (event.keyCode == 107) {
    this.bool = false;
    window.dancers[poke2Index].moveDown();
  }
  else if (event.keyCode == 106) {
    this.bool = false;
    window.dancers[poke2Index].moveLeft();
  }
  else if (event.keyCode == 108) {
    this.bool = false;
    window.dancers[poke2Index].moveRight();
  }
}




});

