const convertToCelsius = function(temp) {
  return parseFloat(((temp - 32) * (5 / 9)).toFixed(1), 10);
};

const convertToFahrenheit = function(temp) {
  return parseFloat(((temp * (9 / 5)) + 32).toFixed(1), 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
