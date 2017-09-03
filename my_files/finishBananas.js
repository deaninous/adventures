// This time your regex should match only when the given string ends with
// "BANANAS".

// Here's a template that you can use:

//   module.exports = function (str) {
//     /* return whether str ends with "BANANAS" */
//   }

// Use a `$` character to anchor on the end of a piece of text.

// Remember from the previous adventure that regexes in javascript are between two
// `/` characters and they have a `.test()` method.

// To verify your solution, run:

//   regex-adventure verify solution.js

function finishBananas(str){
	return /BANANAS$/.test(str)
}
module.exports = finishBananas