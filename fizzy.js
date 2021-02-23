const getInput = require("./get-input.js");
const fizzy = require("./fizzy-backend.js");

const num = getInput();
const answer = fizzy(n);
console.log(answer);
