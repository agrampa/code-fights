function containsDuplicates(a) {
  let dupes = false
  let result = []
  for(let i = 0; i < a.length; i++) {
    if(result.includes(a[i])) {
      dupes = true
    } else result.push(a[i])
  }
  return dupes
}


// BETTER RUN TIME

function containsDuplicates(a) {
  return (new Set(a)).size !== a.length;
}
