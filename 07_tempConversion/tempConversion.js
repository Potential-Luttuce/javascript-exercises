const convertToCelsius = function(tempF) {
  const celTemp = (tempF - 32) * (9/5);
  return celTemp;
};

const convertToFahrenheit = function(tempC) {
  const fahTemp = (tempC * (9/5)) + 32;
  return fahTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
