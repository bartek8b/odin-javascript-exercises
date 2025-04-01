const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
}

const sum = function(array) {
  return array.reduce((accumulator, item) =>  accumulator + item, 0)
}

const multiply = function(array ) {
  return array.reduce((accumulator, item) =>  accumulator * item, 1)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let result = 1;
	for(let i = num; i > 1; i--){
    if(num !== 0){
      result *= i;
    }
  }
  return result;
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
