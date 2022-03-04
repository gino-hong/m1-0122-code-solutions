/* exported zip */

function zip(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length && i < second.length; i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}

// define a function named zip with two parameters 'first' and 'second'
// define a new variable newArray and assign it an empty array
// use a for loop with variable i starting from 0 until whichever length is shorter between 'first' and 'second'
// after each loop, increment i by 1
// inside the for loop, push an array with two values
// the first value is first at i
// the second value is second at i
// return newArray
