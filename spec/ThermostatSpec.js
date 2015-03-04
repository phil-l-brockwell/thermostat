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

});