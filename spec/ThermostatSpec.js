describe('Thermostat', function() {

  var thermostat = new Thermostat

  it('is initialized at 20 degrees', function() {
    expect(thermostat.temp).toBe(20);
  });

  it('can increase its temperature', function() {
    expect(thermostat.temp).toBe(20);
    thermostat.increaseTemp();
    expect(thermostat.temp).toBe(21);
  });

  it('can decrease its temperature', function() {
    expect(thermostat.temp).toBe(21);
    thermostat.decreaseTemp();
    expect(thermostat.temp).toBe(20);
  });

  it('has a minimum temperature of 10', function() {
    expect(thermostat.MIN).toBe(10);
  });

  it('cannot drop below minimum temperature', function() {
    while (thermostat.temp > 10) {
    thermostat.decreaseTemp();
    };
    thermostat.decreaseTemp();  
    expect(thermostat.temp).toBe(10);
  });

  it('is initialized with power saving mode on', function() {
    expect(thermostat.isPowerSavingOn).toBe(true)
  });

  it('can switch power saving mode off', function() {
    expect(thermostat.isPowerSavingOn).toBe(true);
    thermostat.setMode(false);
    expect(thermostat.isPowerSavingOn).toBe(false);
  });

  it('it has a max temp of 32 when powersaving is off', function() {
    thermostat.setMode(false);
    expect(thermostat.getMax()).toBe(32);  
  });
  
  it('has a max temp of 25 when power saving is on', function() {
    thermostat.setMode(true);
    expect(thermostat.getMax()).toBe(25);
  });  

  it('can reset the temp to 20', function() {
    thermostat.resetTemp();
    expect(thermostat.temp).toBe(20);    
  });

  it('cannot go above maximum temperature', function() {
    thermostat.setMode(false);
    while (thermostat.temp < 32) {
      thermostat.increaseTemp();
    }
    thermostat.increaseTemp();
    expect(thermostat.temp).toBe(32);
  });

  it('knows what efficienecy the temp is', function(){
    thermostat.temp = 17;
    expect(thermostat.checkEfficiency()).toBe('good');
    thermostat.temp = 26;
    expect(thermostat.checkEfficiency()).toBe('bad');
    thermostat.temp = 20;
    expect(thermostat.checkEfficiency()).toBe('medium');
  });

});