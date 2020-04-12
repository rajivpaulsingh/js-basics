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


// If...else
// if hour is between 6 am and 12 pm: Good morning!
// if it is between 12 pm and 6 pm: Good afternoon!
// otherwise: Good evening!
let hour = 15;
if (hour >= 6 && hour < 12) {
    console.log('Good morning');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon');
}
else 
    console.log('Goof evening');

// Switch...case
let role = 'moderator';

switch(role) {
    case 'guest':
    console.log('Guest User');
    break;

    case 'moderator':
    console.log('Moderator User');
    break;

    default:
    console.log('Unknown User');
}

// For loop
for (let i = 0; i < 5; i++) {
    console.log('Hello world', i);
}

// // While loop
// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//         i++;
// }

// // do-while loop
// let i = 9;
// do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5);

// for-in loop
const person2  = {
    name: 'Rajiv',
    age: 37
}

for (let key in person2) {
    console.log(key, person2[key]);
}

const colors = ['red', 'green', 'blue'];
for (let index in colors) {
    console.log(index);
    console.log(colors[index]);
}

// for-of loop
for (let color of colors) {
    console.log(color);
}

// Break and Continue
let j = 0 ;
while (j <= 10) {
    // if (j === 5) break;
    if (j %2 === 0) {
        j++;
        continue;
    }
    console.log(j);
    j++;
}


//Objects (OOP)
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};
circle.draw();

//Factory function
function createCircle(radius) {
    return {
        // radius: radius,
        radius,
        // draw: function() {
        //     console.log('draw');
        // }
        draw() {
            console.log('draw');
        }
    };
}
const circle1 = createCircle(2);
console.log(circle1);

const circle2 = createCircle(3);
console.log(circle2);

//Enumerating the properties of an object
//for-in
for(let key in circle) {
    console.log(key, createCircle[key]);
}
//for-of
for(let key of Object.keys(createCircle)) {
    console.log(key);
}

//Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle3 = new Circle(1);

//String primitive
const message = 'hi';
//typeOf message, this will result 'String'

//String object
const anotherMessage = new String('hi');
//typeOf message, this will result 'Object'

//Template literal (``) <- backtick character
//Old way
const message2 = 'This is my \n' + 
                'first message';
console.log(message2);
//New way using template literal
const anotherMessage2 = `This is my
                second message`;
console.log(anotherMessage2);     


//Exercise - Create Address Object
//street, city, zipCode
//showAddress(address)

let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}
showAddress(address);

//Exercise - Are objects equal and same
//Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

function areEqual(address1, address2) {
    return address1.street === address2.street && 
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2;
}

//Blog Post Object
let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'a', body: 'b'},
        {author: 'c', body: 'd'},
    ],
    isLive: true
};
console.log(post);


//Arrays
const numbers = [3, 4];
console.log(numbers);

//Add new elements to the end of an array
numbers.push(5, 6);
console.log(numbers);

//Add new elements to the beginning of an array
numbers.unshift(1, 2);
console.log(numbers);

//Add new elements to the middle of an array
numbers.splice(2, 0, 'a', 'b');
console.log(numbers)

//Finding elements in an array(Primitive type)
console.log(numbers.indexOf('c'));
console.log(numbers.indexOf(3));

console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(2));

//Finding elements in an array(Reference type)
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];
//Wrong way
console.log(courses.includes({id: 1, name: 'a'},));

//Right way
const course = courses.find(function(course) {
    return course.name === 'a';
});
//Or using Arrow function
const course1 = courses.find(course1 => course1.name ==='a');
console.log(course)

//Removing elements from an array
const numbers1 = [1, 2, 3, 4];

//Removing elements from the end of an array
const last = numbers1.pop();
console.log(numbers1);

//Removing elements from the beginning of an array
const first = numbers1.shift();
console.log(numbers1);

//Removing elements from the middle of an array
numbers1.splice(2, 1);
console.log(numbers1)