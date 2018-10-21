// Creates and returns a new Makedancer object that can step
// var MakeDancer = function(top, left, timeBetweenSteps) { //   var Makedancer = {};

//   // use jQuery to create an HTML <span> tag
//   Makedancer.$node = $('<span class="Makedancer"></span>');

//   Makedancer.step = function() {
//     // the basic Makedancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(Makedancer.step, timeBetweenSteps);
//   };
//   Makedancer.step();

//   Makedancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     Makedancer.$node.css(styleSettings);
//   };

//   // now that we have defined the Makedancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   Makedancer.setPosition(top, left);

//   return Makedancer;
// };

var MakeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="Makedancer"></span>');
  this.step();
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
