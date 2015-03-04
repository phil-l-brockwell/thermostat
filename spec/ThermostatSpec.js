describe('Thermostat', function(){

  var thermostat = new Thermostat

  it('is initialized at 20 degrees', function(){
    expect(thermostat.temp).toEqual(20)
  });

});