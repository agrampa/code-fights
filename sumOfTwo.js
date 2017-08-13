// determine if any value in array 'a' plus any value in array 'b' equals the value 'v'

// need to refactor, this os O(n^2) which is not ideal

function sumOfTwo(a, b, v) {
  let isPossible = false

  for(let i = 0; i < a.length; i++){
    for(let j = 0; j < b.length; j++) {
      if (a[i] + b[j] === v) isPossible = true
    }
  }
  return isPossible
}

sumOfTwo([1, 2, 3], [10, 20, 30, 40], 44)
