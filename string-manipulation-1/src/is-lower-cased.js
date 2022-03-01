/* exported isLowerCased */

function isLowerCased(word) {
  var newWord = word.toLowerCase();
  if (newWord === word) {
    return true;
  } else {
    return false;
  }
}
