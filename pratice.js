// take input from the user
const number = parseInt(prompt("Enter a positive integer: "));

// checking if number is negative
if (number < 0) {
  console.log("Error! Factorial for negative number does not exist.");
}

// if number is 0
else if (number === 0) {
  console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
  let fact = 1;
  for (i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(`The factorial of ${number} is ${fact}.`);
}

// program for a simple calculator
let result;

// take the operator input
const operator = prompt("Enter operator ( either +, -, * or / ): ");

// take the operand input
const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));

switch (operator) {
  case "+":
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;
  case "-":
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;
  case "*":
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;
  case "/":
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;

  default:
    console.log("Invalid operator");
    break;
}

// constructor function
function Person(person_name, person_age, person_gender) {
  // assigning  parameter values to the calling object
  (this.name = person_name),
    (this.age = person_age),
    (this.gender = person_gender),
    (this.greet = function () {
      return "Hi" + " " + this.name;
    });
}

// creating objects
const person1 = new Person("John", 23, "male");
const person2 = new Person("Sam", 25, "female");

// accessing properties
console.log(person1.name); // "John"
console.log(person2.name); // "Sam"

// program to stop the setInterval() method after five times

let count = 0;

// function creation
let interval = setInterval(function () {
  // increasing the count by 1
  count += 1;

  // when count equals to 5, stop the function
  if (count === 5) {
    clearInterval(interval);
  }

  // display the current time
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);
}, 2000);

// try...catch...finally Example
const numerator = 100,
  denominator = "a";

try {
  console.log(numerator / denominator);
  console.log(a);
} catch (error) {
  console.log("An error caught");
  console.log("Error message: " + error);
} finally {
  console.log("Finally will execute every time");
}
