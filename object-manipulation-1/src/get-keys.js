/* exported getKeys */

// define a function named getKeys with one parameter 'object'
// define a new array named newArray and assign it an empty array
// use a for in loop to loop inside the object
// push the keys into the new array
// return the new array

function getKeys(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(key);
  }
  return newArray;
}
