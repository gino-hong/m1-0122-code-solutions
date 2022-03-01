/* exported tail */

// define a function named tail with one parameter 'array'
// define a new array named newArray and assign it an empty array
// use a for loop to go through all the items in the array starting at index 1
// push these values into newArray
// return newArray outside of the for loop

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
