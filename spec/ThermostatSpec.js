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

  it('can decrease its temperature', function(){
    expect(thermostat.temp).toBe(21);
    thermostat.decreaseTemp();
    expect(thermostat.temp).toBe(20);
  });

  it('has a minimum temperature of 10', function() {
    expect(thermostat.min).toBe(10);
  });

  it('temp cannot drop below minimum temperature', function(){
    thermostat.temp = 10;
    thermostat.decreaseTemp(); 
    expect(thermostat.temp).toBe(10);
  });

  it('is initialized with power saving mode on', function() {
    expect(thermostat.isPowerSavingOn).toBe(true)
  });

  it('has a max temperature of 25 when a power saving mode is on', function(){
    expect(thermostat.max).toBe(25);
  });

  it('can switch power saving mode off', function() {
    expect(thermostat.isPowerSavingOn).toBe(true);
    thermostat.setMode();
    expect(thermostat.isPowerSavingOn).toBe(false);
  });

  it('it has a max temp of 32 when powersaving is on', function() {
    thermostat.isPowerSavingOn = true;
    expect(thermostat.getMax()).toBe(32);  
  });
    
});