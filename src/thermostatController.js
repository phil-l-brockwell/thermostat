$('document').ready(function() {
  var thermostat = new Thermostat;
  update();

  function checked() {
    return $('#power-saving').is(':checked');
  };

  function update() {
    if (thermostat.checkEfficiency() === 'good') {
      $('#temp-display').css('color', 'green')
    } else if (thermostat.checkEfficiency() === 'bad') {
      $('#temp-display').css('color', 'red')
    } else if (thermostat.checkEfficiency() === 'medium') {
      $('#temp-display').css('color', 'yellow')
    }
    $('#temp-display').text(thermostat.temp);
  };

  $('#up-button').click(function() {
    thermostat.setMode(checked());
    thermostat.increaseTemp();
    update();
  });

  $('#down-button').click(function() {
    thermostat.decreaseTemp();
    update();
  });

  $('#reset-button').click(function() {
    thermostat.resetTemp();
    update();
  });

});
