/* exported lastChars */

function lastChars(length, string) {
  var newString = '';
  if (length > string.length) {
    length = string.length;
  }
  for (var i = string.length - length; i < string.length; i++) {
    newString += string[i];
  }
  return newString;
}
