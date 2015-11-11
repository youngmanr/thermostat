function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.temperature < 25) {
    this.temperature += 1;
  }
  return this.temperature;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature > 10) {
    this.temperature -= 1;
  };
  return this.temperature;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
  return this.powerSavingMode;
};
