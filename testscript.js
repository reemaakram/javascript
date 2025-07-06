// Data Types R1
let name = "Reema";
let age = 22;
let isStudent = true;
let result = 10 + 7;
let message = "Hello, " + name + "! Welcome to my site.";

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Result of addition:", result);
console.log("Greeting message:", message);

// Conditional Statements R2
let number = 17;

if (number > 10) {
    console.log("The number is greater than 10.");
}

if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

let score = 88;

if (score >= 0) {
    if (score >= 60) {
        console.log("Pass the exam.");
    } else {
        console.log("Fail the exam.");
    }
} else {
    console.log("Invalid score.");
}

// message based on the day
let day = "friday"; 
switch (day.toLowerCase()) {
    case "sunday":
        console.log("Hello, it's Sunday.");
        break;
    case "monday":
        console.log("Hello, it's Monday.");
        break;
    case "tuesday":
        console.log("Hello, it's Tuesday.");
        break;
    case "wednesday":
        console.log("Hello, it's Wednesday.");
        break;
    case "thursday":
        console.log("Hello, it's Thursday.");
        break;
    case "friday":
        console.log("Hello, it's Friday.");
        break;
    case "saturday":
        console.log("Hello, it's Saturday.");
        break;
}

// can the person vote
let canVote = (age >= 18) ? "Eligible to vote." : "Not eligible to vote.";
console.log(canVote);

// Loop R3
console.log("Loop from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("Even numbers between 1 and 10:");
let num = 1;
while (num <= 10) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}

// Do-while loop 
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function askNumber() {
    readline.question('Enter a number: ', (input) => {
        let number = parseInt(input);
        if (isNaN(number)) {
            console.log("Please enter a valid number.");
            askNumber();
            return;
        }
        if (number < 0) {
            console.log("Negative number entered. Exit loop.");
            readline.close();
        } else {
            console.log(`You entered: ${number}`);
            askNumber(); 
        }
    });
}

// Start the input loop
askNumber();

// Iterate over an array of names 
console.log("names:");
let names = ["Reema", "Sara", "Sahar", "Layan"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// sum of all numbers 
let numbers = [3, 4, 5, 9, 12];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum of numbers in the array:", sum);

// array R4
// Create an array 
let colors = ["red", "blue", "green"];
console.log("The colors in the array:", colors);

console.log("Second color:", colors[1]); 

colors.push("yellow");
console.log("After adding new color, the colors are:", colors);

colors.shift();
console.log("After removing the first color the colors are:", colors);

// Update 
colors[1] = "brown"; 
console.log("After updating the second color the colors are:", colors);

// func R5
function add(a, b) {
    return a + b;
}
console.log("Sum of 5 and 5:", add(5, 5)); 

function isEven(number) {
    return number % 2 === 0;
}
console.log("Is 6 even?", isEven(7)); 
console.log("Is 7 even?", isEven(8)); 

function greet(name) {
    return "Hello, " + name + "! Welcome.";
}
console.log(greet("Reema"));

// calculate the area of a circle
function calculateArea(radius) {
    return Math.PI * radius * radius;
}
console.log("Area of a circle with radius 3:", calculateArea(3)); 

// reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reverse of 'hello':", reverseString("hello")); 