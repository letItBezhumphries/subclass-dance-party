var MakeStormTrooperDancer = function(top, left, timeBetweenStops) {
  MakeDancer.call(this, top, left, timeBetweenStops);
  this.$node.addClass('stormTrooperDancer');
  this.top = top;
  this.left = left;
};

MakeStormTrooperDancer.prototype = Object.create(MakeDancer.prototype);
MakeStormTrooperDancer.prototype.constructor = MakeStormTrooperDancer;

MakeStormTrooperDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  //this.$node.slideToggle().animate({ left: "-=400" }, 500)
  //this.$node.animate({"left":Math.random()*140, "top":Math.random()*800}, 3000);
  //this.$node.animate({"left":Math.random()*1400, "top":Math.random()*800}, 3000);
  this.$node.css("transform","rotate"+ Math.random()* 180 + "deg)");
  this.$node.animate({height: "300px"});
  
  // this.top = $("body").height() * Math.random();
  // this.left = $("body").width() * Math.random();
  // this.setPosition(this.top, this.left);

      // change size of dancer
  // if (this.$node.css('width').substr(0,2) === '20' && this.$node.css('display') === 'block'){
  //   this.$node.css('width', '100px');
  // }
  // else if (this.$node.css('display') === 'block'){
  //   this.$node.css('width', '20px');
  // }

};