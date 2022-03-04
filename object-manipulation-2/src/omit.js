/* exported omit */

// define a function named omit with two parameters 'source' and 'keys'
// define a new variable newObject and assign an empty object
// use a for in loop to go through all the properties in 'source'
// if the property is not in the 'keys' array, create a new key property in newObject and assign it the same value as the key property in source
// return newObject

function omit(source, keys) {
  var newObject = {};
  for (var key in source) {
    if (keys.includes(key) === false) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
