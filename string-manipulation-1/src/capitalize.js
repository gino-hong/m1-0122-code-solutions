/* exported capitalize */

// define a function named capitalize with one parameter 'word'
// use the toUpperCase method on the word at index 0
// return the value of word

function capitalize(word) {
  var string = '';
  string = string.concat(word[0].toUpperCase());
  for (var i = 1; i < word.length; i++) {
    string = string.concat(word[i].toLowerCase());
  }
  return string;
}

// define a function named capitalize with one parameter 'word'
// define a variable string and assign an empty string to it
// concatenate string with word at 0 after applying toUpperCaseMethod to word at 0
// assign the result to string
// use a for loop to add the rest of the letters in word to string after applying toLowerCase method
// return the value of string
