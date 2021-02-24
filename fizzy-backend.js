// returns 'Fizz' if the given number is divisible by 3 and not 5

// returns 'Buzz' if the given number is divisible by 5 and not 3

// returns 'FizzBuzz' if the given number is divisible by both 3 and 5

// returns the number if the given number is divisible by neither 3 nor 5

function fizzy(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else return num;
}

module.exports = fizzy;
