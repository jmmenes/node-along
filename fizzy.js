const getInput = require("./get-input.js");
const fizzy = require("./fizzy-backend.js");

const n = getInput();
const answer = fizzy(n);
console.log(answer);

// if (n % 3 === 0 && n % 5 === 0) {
//   console.log("FizzBuzz");
// } else if (n % 3 === 0) {
//   console.log("Fizz");
// } else if (n % 5 === 0) {
//   console.log("Buzz");
// } else console.log(n);
