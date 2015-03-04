Thermostat = function() {
  this.temp = 20;
  this.min = 10;
};

Thermostat.prototype.increaseTemp = function () {
  this.temp +=1;
};

Thermostat.prototype.decreaseTemp = function () {
  this.temp -=1;
};