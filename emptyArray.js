// Source: https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z

// methods to empty an array

let arrayList =  ['a','b','c','d','e','f'];

// method 1
arrayList = []

// if you need to keep reference to the original...
let arrayList = ['a','b','c','d','e','f']; // Created array
let anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList = []; // Empty the array
console.log(anotherArrayList); // Output ['a','b','c','d','e','f']

// method 2
arrayList.length = 0;

var arrayList = ['a','b','c','d','e','f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList.length = 0; // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []

// method 3
arrayList.splice(0, arrayList.length);

var arrayList = ['a','b','c','d','e','f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList.splice(0, arrayList.length); // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []

// method 4
while(arrayList.length){
  arrayList.pop();
}
