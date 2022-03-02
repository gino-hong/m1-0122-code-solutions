/* exported pick */

// define function named pick with two parameters 'source' and 'key'
// define a new variable newObject and assign it empty object
// use a for loop to go through the keys array
// if property keys at i does not have an undefined value, assign the value to the new keys at i property of newObject
// return newObject

function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) { newObject[keys[i]] = source[keys[i]]; }
  }
  return newObject;
}
