const add = function(a, b) {
	return a + b;
};

const subtract = function(a ,b) {
	return a - b;
};

const sum = function(array) {
	let current = 0;
  for(let i = 0; i < array.length; i++){
    current += array[i];
  }
  return current;
};

const multiply = function(array) {
  let current = 1;
  for (let index = 0; index < array.length; index++) {
     current = current * array[index]; }
    return current;
  };

const power = function(a, b) {
	return (a ** b);
};

const factorial = function(num) {
  if(num === 0) return 1;
  let product = 1;
  let count = 1;
  while (count <= num){
    product = count * product;
    count++;
  }
  return product;
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
