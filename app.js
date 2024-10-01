// a. Data Types
let number = 10; // Number
let message = "Hello, World!"; // String
let isActive = true; // Boolean
let notAssigned; // Undefined
let emptyValue = null; // Null
let uniqueId = Symbol("id"); // Symbol
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt

// b. Arithmetic and Logical Operators
let a = 5;
let b = 3;

let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let isEqual = (a === b); // Equality check

console.log(`Sum: ${sum}, Difference: ${difference}, Product: ${product}, Quotient: ${quotient}, Is Equal: ${isEqual}`);

// c. Conditional Statements

// i. if else
if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}

// ii. switch
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(`The day is: ${dayName}`);

// d. Loops

// For loop to print numbers 1 to 5
console.log("Numbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/ d. Loops

// For loop to print numbers 1 to 5
console.log("Numbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// e. Functional Programming

// i. Function to determine if a number is odd or even
function isEven(num) {
    return num % 2 === 0;
}

// ii. Function to determine if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// iii. Function to determine if a string is a palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Testing the functions
console.log(`${number} is ${isEven(number) ? "even" : "odd"}.`);
console.log(`${number} is ${isPrime(number) ? "a prime" : "not a prime"} number.`);
let testString = "racecar";
console.log(`Is "${testString}" a palindrome? ${isPalindrome(testString) ? "Yes" : "No"}.`);
