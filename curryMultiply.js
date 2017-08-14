// source: https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z

function mul (x) {
  return function (y) { // anonymous function
    return function (z) { // anonymous function
      return x * y * z;
    };
  };
}


console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48
