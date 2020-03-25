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

// Function - Performing a task
function greet(name3) { //parameter
    console.log('Hello there ' + name3);
}
greet('Rajiv'); //argument
greet('Singh');

// Function - Calculating a value
function square(number) {
    return number * number;
}
let number = square(2);
console.log(number);
console.log(square(2));

// Operator types - Arithmetic, Assignment, Comparison, Logical, Bitwise
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Increment and Decrement operators
console.log(++x);
console.log(--x);

// Comparison operators
console.log(x > 0);
console.log(x >= 10);
console.log(x < 0);
console.log(x <= 0);
console.log(x === 10);
console.log(x !== 10);

// Strict equality operator - both operant types are of same type and values
console.log(1 === 1);
console.log('1' === 1);

// Lose equality operator - it converts the right value to match with right value 
// and only checks if values are equal
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

// Ternary operators
// If a customer has more than 100 points, they are 'gold' otherwise they are 'silver'
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

// Logical operators
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible ', eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log('Application Refused ', applicationRefused);

// Bitwise operators
// 1 = 00000001;
// 2 = 00000010;
// 3 = 00000011;
// Result 1 | 2 = 00000011;
// Result 1 % 2 = 00000000;
console.log(1 | 2);
console.log(1 & 2);

// Read, Write and Execute permissions
// 00000100
// 00000110
// 00000111

