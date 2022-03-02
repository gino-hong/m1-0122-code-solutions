/* exported take */

// define a function named take with two parameters 'array' and 'count'
// define a new variable newArray and assign it a value of an empty array
// use a for loop that begins at index 0 and goes to less than 'count'
// in each loop, push the value of array[i] into the new array
// return newArray

function take(array, count) {
  var newArray = [];
  if (array.length > count) {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// the for statement needs to be nested in an if statement
// the if statement needs to check if the length of the array is greater than count
// by doing this, we can avoid returning an array with multiple empty values
