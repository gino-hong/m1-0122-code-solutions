/* exported dropRight */

function dropRight(array, count) {
  var newArray = [];
  if (count < array.length) {
    for (var i = 0; i < array.length - count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
