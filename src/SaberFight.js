var SaberFight = function(top, left, timeBetweenStops) {
  MakeDancer.call(this, top, left, timeBetweenStops);
  this.$node.addClass('SaberFight');
};

SaberFight.prototype = Object.create(MakeDancer.prototype);
SaberFight.prototype.constructor = SaberFight;

SaberFight.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate("animated shake");
};