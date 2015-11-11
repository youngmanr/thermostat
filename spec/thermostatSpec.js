describe('thermostat', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('thermostat starts at 20 degress', function(){
    thermostat.temperature;
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases the temperature with the up button', function(){
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature with the down button', function(){
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.decreaseTemperature();
    }
   expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('if powerSavingMode is on has maximum temperature of 25', function(){
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

  it('power saving mode ON by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  });

  it('switch power saving mode to OFF', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toEqual(false);
  });

  it('has a reset button', function() {
    thermostat.resetButton();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

});
