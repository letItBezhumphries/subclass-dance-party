var C3PO = function(top, left, right, timeBetweenStops) {
  MakeDancer.call(this, top, left, right, timeBetweenStops);
  this.$node.addClass('C3PO');
};

C3PO.prototype = Object.create(MakeDancer.prototype);
C3PO.prototype.constructor = C3PO;

C3PO.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  //this.$node.animate({ left: "+=40" }, 1000).show(); 
  //this.$node.animate({"left":Math.random()*140, "top":Math.random()*800}, 3000);
  //this.$node.animate({"left":Math.random()*1400, "top":Math.random()*800}, 3000);
  //this.$node.css("transform","rotate("+Math.random()*180+"deg)");
  //this.$node.animate({height: "300px"});

};
C3PO.prototype.lineUp = function() {
  this.$node.toggleClass('lineUp-Right');
 
};

