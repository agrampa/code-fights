// source: https://www.toptal.com/javascript/interview-questions

// Write a sum method which will work properly when invoked using either syntax:
// sum(2, 3) -> 5
// sum(2)(3) -> 5

// Method 1
function sum(x) {
  if(arguments.length === 2) {
    return arguments[0] + arguments[1]
  } else {
    return function(y) {
      return x + y
    }
  }
}


// Method 2
function sum(x, y) {
  if(y !== undefined) {
    return x + y
  } else {
    return function(y) {
      return x + y
    }
  }
}

// Javascript does not require that the number of arguments passed in matches the number of arguments in the function definition
// If more arguments are passed in, the excess will be ignored
// If fewer arguments are passed in, the missing arguments will have a value of undefined 
