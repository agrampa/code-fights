var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
// What will be the output?
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// Output
"array 1: length=5 last=j,o,n,e,s"
"array 2: length=5 last=j,o,n,e,s"

Why?
- calling reverse will reverse the contents of the array and the array itself, so arr1 is actually in reverse order
- arr2 is a reference to arr1, not a copy, so anything done to arr2 will also affect arr1 since they reference the same object
- arr3 is pushed as a single element to arr2, not pushed as individual elements, like `.concat` would
- subscript of -1 in the slice method will remove the last element in the array 
