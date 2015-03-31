// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  var index = Math.floor(Math.random() * 12)
  this.$node = $('<span class="dancer'+index+'"'+'></span>');
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

};

Dancer.prototype.moveRight = function(){
  this.xAccel = 10;
  // this.left+=10;
};

Dancer.prototype.moveLeft = function(){
  this.xAccel = -10;
  // this.left-=10;
};

Dancer.prototype.moveUp = function(){
  this.yAccel = -10;
  // this.top-=10;
};

Dancer.prototype.moveDown = function(){
  this.yAccel = 10;
  // this.top+=10;
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
