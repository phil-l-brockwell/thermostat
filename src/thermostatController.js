$('document').ready(function() {
  var thermostat = new Thermostat;
  update();

  function checked() {
    return $('#power-saving').is(':checked');
  };

  function getInc() {
    return 10 * (thermostat.temp);
  };

  function getInc2() {
    return 255 - (31 * (thermostat.temp - 24));
  };

  function getTempPer() {
    return 100 - ((thermostat.temp - 10) * 3.90);
  };

  function getColour() {
    if (thermostat.temp < 25) return "rgba(" + getInc() + ", 255, 0, 1)";
    return "rgba(255, " + getInc2() + ", 0, 1)";
  };

  function update() {
    $('body').css('background-color', getColour());
    $('#temp-display').text(thermostat.temp);
    if(thermostat.temp === thermostat.MAX_HIGH){
      $('#black').hide(1000);
    } else {
      $('#black').show(1000);
      $('#black').css('height', getTempPer() + '%');
    };
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

  $('#power-saving').click(function() {
    thermostat.resetTemp();
    update();
  });
});