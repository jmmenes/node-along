const getInput = require("./get-input.js");

// 1. take in our user's age, saving it in a variable
const userAge = getInput();

// 2. check if they want help
if (userAge === "--help") {
  console.log("This function returns your mental age.");
  console.log('Please enter your age after "node mental-age.js" and a space.');
}

// 3. divide it by 2 and add 3
const mentalAge = userAge / 2 + 3;
const ageNextYear = Number(userAge) + 1;
console.log("Next year you'll be " + ageNextYear + " years old.");

// 4. print out the user's age in a sentence
// For example: "You are 23 years old."
console.log("Your mental age is " + mentalAge + " years old.");
