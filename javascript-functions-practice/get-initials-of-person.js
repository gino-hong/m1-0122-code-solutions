/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstInitial = person.firstName.charAt(0);
  var lastInitial = person.lastName.charAt(0);
  var initials = firstInitial + lastInitial;
  return initials;
}
