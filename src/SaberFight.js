var SaberFight = function(top, left, timeBetweenStops) {
  MakeDancer.call(this, top, left, timeBetweenStops);
  this.$node.addClass('SaberFight');
  
};

SaberFight.prototype = Object.create(MakeDancer.prototype);
SaberFight.prototype.constructor = SaberFight;

SaberFight.prototype.step = function() {
  MakeDancer.prototype.step.call(this);


  this._top = $("body").height() * Math.random();
  this._left = $("body").width() * Math.random();
  this.setPosition(this._top, this._left);



};
    
  //this.$node.animate({"left":"+=200px", "top": 200, "right":"-=50px"  },1000);
