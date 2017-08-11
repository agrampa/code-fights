function willYou(young, beautiful, loved) {
  let isContradicting = false

  if(loved && (!beautiful || !young)) {
    isContradicting = true
  }

  if(!loved && (beautiful && young)) {
    isContradicting = true
  }
  return isContradicting
}

willYou(true, true, true)
