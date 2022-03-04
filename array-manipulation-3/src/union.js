/* exported union */

function union(first, second) {
  var newArray = [];
  for (var j = 0; j < first.length; j++) {
    newArray.push(first[j]);
  }
  for (var i = 0; i < second.length; i++) {
    if (first.includes(second[i]) === false) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
