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

  it('has a max temp of 25 degress', function(){
    for (var i = 1; i < 10; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it('power saving mode ON by defualt', function(){
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  });

});
