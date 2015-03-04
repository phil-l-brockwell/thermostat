Thermostat = function() {
  this.temp = 20;
  this.min = 10;
};

Thermostat.prototype.increaseTemp = function () {
  this.temp +=1;
};

Thermostat.prototype.decreaseTemp = function () {
  if (this.temp === this.min) {
    this.temp = 10;
  }else {
    this.temp -=1;
  }
};