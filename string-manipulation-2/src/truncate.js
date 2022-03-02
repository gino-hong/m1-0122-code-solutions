/* exported truncate */

// define a function named truncate with two parameters 'length' and 'string'
// use the splice method on string calling two arguments 0 and 'length'
// assign the return to a new string variable
// append an ellipsis to the end of the new string variable

function truncate(length, string) {
  var newString = '';
  newString = string.slice(0, length);
  newString += '...';
  return newString;
}
