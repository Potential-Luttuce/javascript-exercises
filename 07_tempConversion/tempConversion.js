const convertToCelsius = function(tempF) {
  const celTemp = (tempF - 32) * (5/9);
  return Math.round(celTemp * 10) / 10;
};

const convertToFahrenheit = function(tempC) {
  const fahTemp = (tempC * (9/5)) + 32;
  return Math.round(fahTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
