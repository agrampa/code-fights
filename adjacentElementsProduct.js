function adjacentElementsProduct(inputArray) {
  let holder = [];

  for(let i = 0; i < inputArray.length - 1; i++) {
    let sum = inputArray[i] * inputArray[i+1];
    if(!isNaN(sum)) {
     holder.push(sum);
    } else {
      sum = null;
    }
  }
  return Math.max(...holder);
}
