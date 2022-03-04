/* exported equal */

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  } else {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
  }
  return true;
}

// define a function named equal with two parameters 'first' and 'second'
// if statement to check the lengths of 'first' and 'second'
// if they are not equal, return false
// in the else statement, run a for loop and check if first at i is not equal to second at i
// if that expression is true, return false
// if all checks have passed without returning false, return true
