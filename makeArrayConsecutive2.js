function makeArrayConsecutive2(statues) {
  let sorted = statues.sort();
  let counter = 0;
  for(let i = 0; i < sorted.length; i++) {
    let diff = (sorted[i+1] - sorted[i]);
    if(diff > 1) {
      counter += diff-1;
    }
  }
  return counter;
}
