var C3PO = function(top, left,tweenStops) {
  MakeDancer.call(this, top, left,tweenStops);
  this.$node.addClass('C3PO');
};

C3PO.prototype = Object.create(MakeDancer.prototype);
C3PO.prototype.constructor = C3PO;

C3PO.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  //this.$node.slideToggle().animate({ left: "-=400" }, 500).show(); 
  //this.$node.animate({"left":Math.random()*140, "top":Math.random()*800}, 3000);
  //this.$node.animate({"left":Math.random()*1400, "top":Math.random()*800}, 3000);
  //this.$node.css("transform","rotate("+Math.random()*180+"deg)");
  //this.$node.animate({height: "300px"});
    
};

C3PO.prototype.lineUp = function() {
  this.$node.toggleClass('lineUp-Right');
};