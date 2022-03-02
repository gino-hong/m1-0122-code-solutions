/* exported compact */

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false) {
      if (array[i] !== null) {
        if (array[i] !== 0) {
          if (array[i] !== undefined) {
            if (array[i] !== '') {
              if (Number.isNaN(array[i]) === false) {
                newArray.push(array[i]);
              }
            }
          }
        }
      }
    }
  }
  return newArray;
}
