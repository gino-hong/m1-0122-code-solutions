/* exported includes */

// define a function named includes with two parameters 'array' and 'value'
// use a for loop to check all items in 'array'
// if value matches with an item in 'array', we need to return true
// once we are out of the for loop and we have not found a match, return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
