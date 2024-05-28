const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
 let result = arr.reduce((collector, value) => collector + value, 0)
 return result;
};

const multiply = function(arr) {
  let result = arr.reduce((collector, value) => collector * value)
 return result;
};

const power = function(x, n) {
  let y = x;
	for (let i = 1; i < n; i++)
  {
    x = x * y;
  }
  return x;
};

const factorial = function(x) {
  for (let i = x; i != 0; i--)
  {
    if (i > 1){
      x *= (i - 1)
      console.log(x)
    }
    else
    {
      x *= i;
    }
  }
  if ( x == 0){
    return 1
  }
  else {
	  return x;
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
