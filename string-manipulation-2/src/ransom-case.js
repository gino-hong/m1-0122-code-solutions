/* exported ransomCase */

// define a function named ransomCase with one parameter 'string'
// define a new variable newString and assign it the value of an empty string
// use a for loop to go through every character in the string
// if the index is even, we can push the character into the new string while calling the toLowerCase method
// if the index is odd, we can push the character into the new string while calling the toUpperCase method
// return newString

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string[i].toLowerCase();
    } else if (i % 2 === 1) {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}
