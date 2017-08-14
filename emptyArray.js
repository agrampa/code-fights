// Source: https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z

// methods to empty an array

let arrayList =  ['a','b','c','d','e','f'];

// method 1
arrayList = []

// method 2
let arrayList = ['a','b','c','d','e','f']; // Created array
let anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList = []; // Empty the array
console.log(anotherArrayList); // Output ['a','b','c','d','e','f']

// method 3
arrayList.length = 0;

// method 4
let arrayList = ['a','b','c','d','e','f']; // Created array
let anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList.length = 0; // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []
