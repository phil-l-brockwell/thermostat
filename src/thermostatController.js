var thermostat = new Thermostat

var tempDisplay = document.getElementById("temp-display");
var upButton = document.getElementById('up-button');
var downButton = document.getElementById('down-button');
var resetButton = document.getElementById('reset-button');


tempDisplay.innerHTML = thermostat.temp + "&deg C" 

function checked () {
  return document.getElementById('power-saving').checked;    
}

upButton.addEventListener('click', function() {
  thermostat.setMode(checked());
  thermostat.increaseTemp();
  tempDisplay.innerHTML = thermostat.temp + "&deg C" 
});

downButton.addEventListener('click', function() {
  thermostat.decreaseTemp();
  tempDisplay.innerHTML = thermostat.temp + "&deg C" 
});

resetButton.addEventListener('click', function() {
  thermostat.resetTemp();
  tempDisplay.innerHTML = thermostat.temp + "&deg C" 
});