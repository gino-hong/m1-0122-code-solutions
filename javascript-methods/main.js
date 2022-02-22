var a = 1;
var b = 2;
var c = 3;
var maximumValue = Math.max(a, b, c);
console.log('maximumValue: ', maximumValue);

var heroes = ['Spider-Man', 'Batman', 'Wolverine', 'Iron Man'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  }
];
var lastBook = library.pop();
console.log('lastBook: ', lastBook);
var firstBook = library.shift();
console.log('firstBook: ', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);

var fullName = 'Gino Hong';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
