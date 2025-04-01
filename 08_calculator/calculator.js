const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  if (array.length === 0){
    return 0;
  }   
  else{
      for(let i = 0; i < array.length; i++){
      array[i] = parseFloat(array[i]);
      return array.reduce((accumulator, item) =>  accumulator + item, 0);  
    }
  }

  
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
