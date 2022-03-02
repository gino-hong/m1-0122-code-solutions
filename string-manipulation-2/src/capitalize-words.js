/* exported capitalizeWords */

// define a function named capitalizeWords with one parameter 'string'
// define a new variable newString and assign it empty string
// call the toUpperCase method for the first character in the string and append it with newString
// use a for loop to go through the rest of the characters in 'string'
// if the character before is a space, we can append the current character while calling the toUpperCase method
// if it is not a space, we can append the current character while calling the toLowerCase method
// return newString

function capitalizeWords(string) {
  var newString = '';
  newString += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
