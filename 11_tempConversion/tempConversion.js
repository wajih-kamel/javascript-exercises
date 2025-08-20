const convertToCelsius = function(degree) {

  let convertedDegree=(degree-32)/1.8

  return +convertedDegree.toFixed(1);
};

const convertToFahrenheit = function(degree) {

  let convertedDegree=(degree*1.8)+32;

  return +convertedDegree.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
