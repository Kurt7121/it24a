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
