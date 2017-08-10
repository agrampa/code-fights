function arithmeticExpression(a, b, c) {
  let add = a+b
  let sub = a-b
  let mult = a*b
  let div = a/b
  if(add === c || sub === c || mult === c || div === c) return true
  else return false
}
