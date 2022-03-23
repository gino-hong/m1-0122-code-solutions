var booksArray = [
  {
    isbn: '9798745274824',
    title: 'The Great Gatsby: The Original 1925 Edition (A F. Scott Fitzgerald Classic Novel)',
    author: 'Fitzgerald, F. Scott'
  },
  {
    isbn: '9791280035356',
    title: '1984',
    author: 'Orwell, George'
  },
  {
    isbn: '9798780290636',
    title: 'The Sun Also Rises',
    author: 'Hemingway, Ernest'
  }
];

console.log('Array of books:', booksArray);
console.log('type of array of books:', typeof booksArray);

var booksArrayString = JSON.stringify(booksArray);

console.log('String of array of books:', booksArrayString);
console.log('type of string of array of books:', typeof booksArrayString);

var studentString = '{"id":1,"name":"Gino Hong"}';

console.log('String of student:', studentString);
console.log('type of string of student:', typeof studentString);

var studentObject = JSON.parse(studentString);

console.log('Student object:', studentObject);
console.log('type of student object:', typeof studentObject);
