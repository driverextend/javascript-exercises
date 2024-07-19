const convertToCelsius = function(numInF) {
  let numToC = (parseFloat(numInF) - 32) * 5 / 9
  
  return Math.round(numToC * 10) / 10
};


const convertToFahrenheit = function(numInC) {
  let numToF = (parseFloat(numInC) * 9 / 5) + 32

  return Math.round(numToF * 10) / 10
};


console.log(convertToCelsius(32)) // fahrenheit to celsius, should return 0
console.log(convertToFahrenheit(0)) // celsius to fahrenheit, should return 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
