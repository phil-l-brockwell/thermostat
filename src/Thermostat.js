Thermostat = function() {
  this.defaultTemp = 20;
  this.temp = this.defaultTemp;
  this.min = 10;
  this.maxLow = 25;
  this.maxHigh = 32;
  this.isPowerSavingOn = true;
  this.defaultChange = 1;  
};

Thermostat.prototype.increaseTemp = function() {
  if (this.temp === this.getMax()){
    this.temp = this.getMax();
  } else {
    this.temp += this.defaultChange;  
  }
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temp === this.min) {
    this.temp = this.min;
  } else {
    this.temp -= this.defaultChange;
  }
};

Thermostat.prototype.setMode = function(val) {
  this.isPowerSavingOn = val;
};

Thermostat.prototype.getMax = function() {
  if (this.isPowerSavingOn === false) return this.maxHigh;
  return this.maxLow;
};

Thermostat.prototype.resetTemp = function() {
  this.temp = this.defaultTemp;
};