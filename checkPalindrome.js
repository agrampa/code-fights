function checkPalindrome(inputString) {
  let length = inputString.length
  let array = [...inputString];


  let last = array.length-1;
  let first = 0;

  for (var i = 0; i < (array.length/2); i++) {

    if(array[first] != array[last]) {
      return false;
    } else {
      last --;
      first ++;
    }

  };
  return true;
}
