describe('thermostat', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('default temperature is 20 degrees', function(){
    thermostat.temperature;
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('should increase the temperature with the up button', function(){
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('should decrease the temperature with the down button', function(){
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.decreaseTemperature();
    }
   expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('if powerSavingMode is ON has maximum temperature of 25', function(){
    for (var i = 1; i < 10; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it('if powerSavingMode is OFF maximum temperature is 32', function(){
    thermostat.switchPowerSavingModeOff();
    for (var i=1; i<20; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  it('has power saving mode ON by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  });

  it('can switch power saving mode to OFF', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toEqual(false);
  });

  it('can reset temperature', function() {
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('display colour green if temperature is less than 18', function() {
    thermostat.decreaseTemperature();
    thermostat.decreaseTemperature();
    thermostat.decreaseTemperature();
    expect(thermostat.displayColour()).toEqual('green');
  });

  it('display colour yellow if temperature is less than 25', function() {
    expect(thermostat.displayColour()).toEqual('yellow');
  });

  it('display colour red temperature is 25 or higher', function() {
    for (var i=1; i<6; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.displayColour()).toEqual('red');
  });
});
