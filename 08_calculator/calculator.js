const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;
  if(arr.length === 0){
    return sum;
  }else{
    for(i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  }
};

const multiply = function(arr) {
  let total = 1;
  for(i = 0; i < arr.length; i++){
    total *= arr[i];
  }
  return total;
};

const power = function(num1, num2) {
  let total = num1;
	for(i = 1; i < num2; i++){
    total *= num1;
  }
  return total;
};

const factorial = function(num) {
	if(num === 0){
    return 1;
  }else{
    let total = 1;
    for(i = 1; i <= num; i++){
      total *= i;
    }
    return total;
  }
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
