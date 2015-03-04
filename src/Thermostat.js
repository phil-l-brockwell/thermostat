Thermostat = function() {
  this.temp = 20;
  this.min = 10;
  this.isPowerSavingOn = true;  
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

Thermostat.prototype.setMode = function () {
  if (this.isPowerSavingOn === true){
    this.isPowerSavingOn = false;
  }else{
    this.isPowerSavingOn = true;
  };
};

Thermostat.prototype.getMax = function() {
  if (this.isPowerSavingOn === false) {
    return 32;
  };
};