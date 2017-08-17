function largestNumber(n) {
  let result = []
  for(let i = 0; i < n; i++) {
    result.push(i)
  }
  let reduced = Number(result.join(''))
  return reduced
}
