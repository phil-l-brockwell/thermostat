Thermostat = function() {
  this.DEFAULT_TEMP = 20;
  this.temp = this.DEFAULT_TEMP;
  this.MIN = 10;
  this.MAX_LOW = 25;
  this.MAX_HIGH = 32;
  this.isPowerSavingOn = true;
  this.DEFAULT_CHANGE = 1; 

};

Thermostat.prototype.increaseTemp = function() {
  if (this.temp === this.getMax()){
    this.temp = this.getMax();
  } else {
    this.temp += this.DEFAULT_CHANGE;  
  }
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temp === this.MIN) {
    this.temp = this.MIN;
  } else {
    this.temp -= this.DEFAULT_CHANGE;
  }
};

Thermostat.prototype.setMode = function(val) {
  this.isPowerSavingOn = val;
};

Thermostat.prototype.getMax = function() {
  if (this.isPowerSavingOn === false) return this.MAX_HIGH;
  return this.MAX_LOW;
};

Thermostat.prototype.resetTemp = function() {
  this.temp = this.DEFAULT_TEMP;
};


Thermostat.prototype.checkEfficiency = function() {
  if (this.temp <= 18) return 'good';
  if (this.temp > 25) return 'bad';
  if (this.temp <= 25 && this.temp > 18) return 'medium';
};
