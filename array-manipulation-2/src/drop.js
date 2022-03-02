/* exported drop */

// define a function named drop with two parameters 'array' and 'count'
// define a new variable named newArray and assign it the value of an empty array
// use a for loop starting at the value of count and iterate until the value is no longer less than the length of the array
// in each loop, push the value of 'array' at the number of the loop to newArray
// return newArray

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
