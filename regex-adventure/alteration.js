// Export a function that takes a string argument and returns whether the string
// starts with `cat`, `dog`, or `robot` followed by a number to the end of the
// string.

// Here's a template that you can use:

//   module.exports = function (str) {
//     return /.../.test(str)
//   }

// You can use the alteration operator `|` to solve this adventure.

// The alteration operator matches among possible options:

//   /xyz|qrs|tuv/.test('tuv') // true

// Alteration operators are often seen in capture groups:

//   /0x(ff|00|80)/.test('0x80') // true

// To verify your solution, run:

//   regex-adventure verify solution.js



module.exports = function(str){
	return /^(cat|dog|robot)\d+$/.test(str)
}