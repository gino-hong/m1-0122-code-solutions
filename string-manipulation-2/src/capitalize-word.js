/* exported capitalizeWord */

// define a function named capitalizeWord with one parameter 'word'
// define a new variable newString and assign it value of empty string
// call the toUpperCase method of the string object at 0 and append to newString
// use a for loop to call toLowerCase method of the string object at the remaining indexes
// append these values to newString in each loop
// return the value of newString

function capitalizeWord(word) {
  var newString = '';
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    newString += word[0].toUpperCase();
    for (var i = 1; i < word.length; i++) {
      newString += word[i].toLowerCase();
    }
    return newString;
  }
}
