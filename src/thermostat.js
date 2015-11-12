function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
  this._powerSavingOnMaxTemp = 25;
  this._powerSavingOffMaxTemp = 32;
  this._maxTemp = this._powerSavingOnMaxTemp;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function() {
  this._maxTemp = this.powerSavingMode ? this._powerSavingOnMaxTemp
                                       : this._powerSavingOffMaxTemp;
  if (this.temperature < this._maxTemp) {
    this.temperature += 1;
  }
  return this.temperature;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature > 10) {
    this.temperature -= 1;
  }
  return this.temperature;
};

Thermostat.prototype.togglePowerSavingMode= function() {
  this.powerSavingMode = !this.powerSavingMode;
  if (this.powerSavingMode) {
    this._maxTemp = this._powerSavingOnMaxTemp;
  }
  else {
    this._maxTemp = this._powerSavingOffMaxTemp;
  }
  if (this.temperature > this._maxTemp) {
    this.temperature = this._maxTemp;

  }
  return this.powerSavingMode;
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
};

Thermostat.prototype.displayColour = function() {
    if (this.temperature < 18) {
      return 'green';
    }
    if (this.temperature < 25) {
      return 'yellow';
    }
      return 'red';
};
