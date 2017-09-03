// For our first adventure, create a new file that will receive a string as an
// argument and should return whether the string contains another string,
// "LITERALLY".

// Here's a template that you can use:

//   module.exports = function (str) {
//     /* return whether str contains the string "LITERALLY" */
//   }

// To test for the presence of the string "LITERALLY", you can use a regular
// expression! Regular expressions begin with a `/` and end with another `/`:

//   /I am a regular expression!/

// Everything between the `/` characters is the regular expression.

// Regular expressions have a number of methods, but there is a method called
// `.test()` that accepts a string as an argument to test against.

// Add `.test()` to the end of a regex to run a test on a regex:

//   /wow/.test('so amaze wow such doge') // returns true or false

// To verify your solution, run:

function isLiteral(str){
	return /LITERALLY/.test(str) 
}

module.exports = isLiteral