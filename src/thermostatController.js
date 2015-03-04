$('document').ready(function() {
  var thermostat = new Thermostat;
  update();

  function checked() {
    return $('#power-saving').is(':checked');
  };

  function getColour() {
    if (thermostat.checkEfficiency() === 'good') return 'green';
    if (thermostat.checkEfficiency() === 'bad') return 'red';
    if (thermostat.checkEfficiency() === 'medium') return 'yellow';
  }

  function update(colour) {
    $('#temp-display').css('color', colour)
    $('#temp-display').text(thermostat.temp);
  };


  $('#up-button').click(function() {
    thermostat.setMode(checked());
    thermostat.increaseTemp();
    update(getColour());
  });

  $('#down-button').click(function() {
    thermostat.decreaseTemp();
    update(getColour());
  });

  $('#reset-button').click(function() {
    thermostat.resetTemp();
    update(getColour());
  )};  

});




