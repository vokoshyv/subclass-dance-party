// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  var index = Math.floor(Math.random() * 12)
  this.$node = $('<span class="dancer'+index+'"'+' id='+window.dancers.length+'></span>');
  this.top = top;
  this.left = left;
  this.xAccel = 0;
  this.yAccel = 0;
  this.jiggle = 1;



  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.step();
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;


  this.bool = false;

};

Dancer.prototype.fightingTime = function(){
  var poke1x = window.dancers[poke1Index].left+25;
  var poke1y = window.dancers[poke1Index].top+25;
  var poke2x = window.dancers[poke2Index].left+25;
  var poke2y = window.dancers[poke2Index].top+25;
  var dx = (poke1x + 25) - (poke2x + 25);
  var dy = (poke1y + 25) - (poke2y + 25);
  var distance = Math.sqrt(dx * dx + dy * dy);

  if(this.bool === false){
    window.prevPoke1Class = window.dancers[poke1Index].$node[0].className;
    window.prevPoke2Class = window.dancers[poke2Index].$node[0].className;
  }

  if (distance < 50){
    $("#"+poke1Index).attr('class', 'fighting');
    $("#"+poke2Index).attr('class', 'fighting');
    this.bool = true;
  }
  else{
    $("#"+poke1Index).attr('class', prevPoke1Class);
    $("#"+poke2Index).attr('class', prevPoke2Class);
    this.bool = false;
  }
}

Dancer.prototype.moveRight = function(){
  // this.xAccel = 10;
  this.left+=10;
  this.fightingTime();
};

Dancer.prototype.moveLeft = function(){
  // this.xAccel = -10;
  this.left-=10;
  this.fightingTime();
};

Dancer.prototype.moveUp = function(){
  // this.yAccel = -10;
  this.top-=10;
  this.fightingTime();
};

Dancer.prototype.moveDown = function(){
  // this.yAccel = 10;
  this.top+=10;
  this.fightingTime();
};

Dancer.prototype.stopMotion = function(){
  this.xAccel = 0;
  this.yAccel = 0;
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  this.top += this.yAccel;
  this.left += this.xAccel;
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //

  var index = Math.floor(Math.random()*10)
var colorarray = []

  var styleSettings = {
    top: top,
    left: left,
  };
  this.$node.css(styleSettings);
};
