// This time your regex should match only when the given string begins with
// "LITERALLY".

// Here's a template that you can use:

//   module.exports = function (str) {
//     /* return whether str begins with the string "LITERALLY" */
//   }

// Use a `^` character to anchor on the beginning of a piece of text.

// Remember from the previous adventure that regexes in javascript are between two
// `/` characters and they have a `.test()` method.

// To verify your solution, run:

//   regex-adventure verify solution.js
function startsLiterally(str){
	return /^LITERALLY/.test(str)
}
module.exports = startsLiterally