const add = function(a, b) {
  return a + b
	
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(list) {
  if (list.length <= 0) return 0
  return list.reduce((total, element) => element + total)
	
};

const multiply = function(list) {
  if (list.length <= 0) return 0
  return list.reduce((total, element) => element * total, 1)

  
};

const power = function(base, power) {
  return base ** power
	
};

const factorial = function(n) {
  if (n <= 1) return 1

  return n * factorial(n-1)
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
