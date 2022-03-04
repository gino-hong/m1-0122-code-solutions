/* exported unique */

function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (newArray.includes(array[i]) === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// define a function named unique with one parameter 'array'
// define a new variable newArray and assign it an empty array
// use a for loop to go through the array
// if the newArray does not include array at i, push the value of array at i into newArray
// return newArray
