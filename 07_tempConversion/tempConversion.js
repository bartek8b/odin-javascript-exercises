const convertToCelsius = function(fahrTemp) {
  let celcTemp = (parseFloat(fahrTemp.toFixed(2)) - 32) * 5/9;
  let fixedCelcTemp = parseFloat(celcTemp.toFixed(1));
  return fixedCelcTemp;
};

const convertToFahrenheit = function(celcTemp) {
  let fahrTemp = (parseFloat(celcTemp.toFixed(2)) * 9/5) + 32;
  let fixedfahrTemp = parseFloat(fahrTemp.toFixed(1));
  return fixedfahrTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
