var student = {
  firstName: 'Gino',
  lastName: 'Hong',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Accounting';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Acura',
  model: 'TSX',
  year: 2011
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Spot',
  type: 'dog'
};

delete pet.name;
delete pet['type'];
console.log('value of pet: ', pet);
