/* exported isUpperCased */

// define a function named isUpperCased with one parameter 'word'
// define a new string newWord and assign it the value of word after applying toUpperCase method
// use an if statement to compare the newWord with word
// if both values are strictly equal, return true; otherwise, return false

function isUpperCased(word) {
  var newWord = word.toUpperCase();
  if (newWord === word) {
    return true;
  } else {
    return false;
  }
}
