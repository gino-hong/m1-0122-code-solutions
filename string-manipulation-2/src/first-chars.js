/* exported firstChars */

function firstChars(length, string) {
  var newString = '';
  if (length > string.length) {
    length = string.length;
  }
  for (var i = 0; i < length; i++) {
    newString += string[i];
  }
  return newString;
}
