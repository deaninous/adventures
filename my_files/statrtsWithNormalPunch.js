// Write a module that returns true only when the input string starts with a
// lower-case vowel or a digit.

// Here's a template that you can use:

//   module.exports = function (str) {
//     /* return whether str starts with a vowel or a digit */
//   }

// For this adventure, use a character class anchored to the start of the input.

// Character classes are lists of characters between square brackets
// live inside square brackets `[...]`. Each character between the `[` and `]`
// characters is a valid potential match for input.

// For example, `[abcdexyz]` will match `a`, `b`, `c`, `d`, `e`, `x`, `y`, or `z`.
// Sequential ranges can appear in character classes separated by `-`. For example,
// `[abcdexyz]` can be shortened to read `[a-exyz]` or `[a-ex-z]`.

// Remember from previous adventures that regexes in javascript are defined between
// two `/` characters and they have a `.test()` method.

// To verify your solution, run:

//   regex-adventure verify solution.js


function startsWithGoodDigit(str){
	return /^[ouaei\d]/.test(str)
}
module.exports = startsWithGoodDigit