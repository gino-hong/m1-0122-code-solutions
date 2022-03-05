/* exported isAnagram */

// define a function named isAnagram with two parameters 'firstString' and 'secondString'
// make a copy of the firstString and assign it to a new variable newString
// use a for loop to go through secondString
// if a letter in secondString exists in newString, remove that letter from newString
// if at end of the for loop, newString is an empty string, return true; otherwise, return false

function isAnagram(firstString, secondString) {
  var x = [];
  var y = [];
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      x.push(firstString[i]);
    }
  }
  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      y.push(secondString[j]);
    }
  }
  var a = x.sort();
  var b = y.sort();
  for (var k = 0; k < a.length; k++) {
    if (a[k] !== b[k]) {
      return false;
    }
  }
  return true;
}

// define a function named isAnagram with two parameters 'firstString' and 'secondString'
// create two empty arrays 'x' and 'y'
// use a for loop to push in the letters without the spaces into the arrays
// sort both arrays and then use a for loop to compare each value at each index
// if they do not match, return false; otherwise, if no false has flagged, return true
