// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps){

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  dancer.$node = $('<span class="dancer"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  dancer.step();
  dancer.setPosition(this.top, this.left);
};

  MakeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(step.bind(this), timeBetweenSteps);
  };

  MakeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      this.top: top,
      this.left: left
    };
    dancer.$node.css(styleSettings);
  };
