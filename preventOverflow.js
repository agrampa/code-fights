// source: https://www.toptal.com/javascript/interview-questions


// The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?
var list = readHugeList();

var nextListItem = function() {
  var item = list.pop();

  if (item) {
    // process the list item...
    nextListItem();
  }
};

// Solution:
var list = readHugeList();

var nextListItem = function() {
  var item = list.pop();

  if (item) {
    // process the list item...
    setTimeout( nextListItem, 0);
  }
};

Why?
- the setTimeout will move the recursive calls to the event loop, not the call stack, so the call stack is kept clear
- call stack also remains clear, regardless of input, because the setTimeout is calling the nextListItem, and it is in the event loop
