/* exported isPalindromic */

// define a function named isPalindromic with one parameter 'string'
// create two empty string variables ('forward' and 'backward')
// use a for loop to create one string using 'string' in the forward order
// use another for loop to create a second string using 'string' in the backward order
// for both for loops, make sure to create the string without spaces
// if both new strings are strictly equal, we return true; otherwise, return false

function isPalindromic(string) {
  var forward = '';
  var backward = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      forward += string[i];
    }
  }
  for (var j = string.length - 1; j >= 0; j--) {
    if (string[j] !== ' ') {
      backward += string[j];
    }
  }
  if (forward === backward) {
    return true;
  } else {
    return false;
  }
}
