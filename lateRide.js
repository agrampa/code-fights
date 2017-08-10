// need to attempt again, not the most elegant implementation
// pass all open tests, fail 3/6 hidden tests

function lateRide(n) {
  let remainder = n/60
  let hour = Math.floor(n / 60)
  let minute = Math.abs(hour - remainder)
  let convertedMin = Math.floor(minute * 60)
  let sum = hour + convertedMin
  let reduced = (hour).toString().split("")
  let reducedMap = reduced.map(i => parseInt(i)).reduce((acc, cur) => acc += cur)
  let reduced2 = (convertedMin).toString().split("")
  let reduced2Map = reduced2.map(i => parseInt(i)).reduce((acc, cur) => acc += cur)
  return reducedMap + reduced2Map
}

lateRide(808)


// better solution from https://github.com/Tailsxky/CodeFights/blob/master/Late%20Ride
function lateRide(n) {
  var hour = Math.floor(n/60);
  var second = n%60;
  return Math.floor(hour/10) + hour %10 + Math.floor(second/10) +second%10;
}
