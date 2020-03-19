// This is my first JavaScript code
console.log('Hello world');

// Variables
let name = 'Rajiv';
console.log(name);

let firstName = 'Rajiv';
let lastName = 'Singh';
console.log(firstName + ' ' + lastName);

// Constants
const interestRate = '3.0';
console.log(interestRate);

//Primitive types - String, Number, Boolean, Undefined, Null
let name1 = 'Rajiv'; //String literal
let age = '35'; //Number literal
let isApproved = true; //Boolean literal
let firstName1; //Undefined
let middleName1 = undefined //Undefined
let lastName1 = null; //Null

// Objects
let person = {
    name2: 'Rajiv',
    age2: '35'
};
console.log(person);

// Dot notation
person.name2 = 'Happy';
console.log(person.name2);

// Bracket notation
let selection = 'name2';
person[selection] = 'Paulie';
console.log(person.name2);

// Arrays (its an object in javascript)
let selectedColors = ['red', 'blue', 'yellow'];
selectedColors[3] = 'green';
selectedColors[4] = '5';
selectedColors[5] = null;
console.log(selectedColors);
console.log(selectedColors[1]);
console.log(selectedColors.length);
