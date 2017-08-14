// write a function that can return the number of hits from the last five minutes relative to the time that was entered
// logHits records when url is hit
// getHits returns number of hits in the past five minutes

// use a queue to track the count of hits per minute, for a total of five minutes (five values)
// when site is visited, increment counter
// every time logHits is called, create object with counter and Date.now()
// call logHits on a timer every minute, reset counter

let queue = [0, 0, 0, 0, 0]

let counter = 1;
function onClick() {
  counter++
}

function logHits(counter) {
  console.log('made it')
  queue.unshift(counter)
  counter = 0
  queue.pop()
  console.log(queue)
}

let mInterval = setInterval(function() {
  logHits(3)
  }, 1000)

mInterval()
