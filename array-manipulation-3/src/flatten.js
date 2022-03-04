/* exported flatten */

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// define a function named flatten with one parameter 'array'
// define a new variable newArray and assign it an empty array
// for loop starting from 0 to length of array and iterating by 1
// if statement to check if array[i] is an array
// if it is, run another for loop to push the items in the array into newArray
// else statement to push values in the array that are not arrays into newArray
// return newArray
