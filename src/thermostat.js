function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};
Thermostat.prototype.increaseTemperature = function() {
this.temperature += 1;
  return this.temperature;
};

Thermostat.prototype.decreaseTemperature = function() {
  this.temperature -= 1;
  return this.temperature;
};

