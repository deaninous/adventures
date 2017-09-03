// Export a function that takes a string argument and returns whether the string
// contains exactly 8 columns of hex codes formatted like: 0xFF with one or more
// characters of trailing whitespace after each hex code to separate the columns.

// The hex codes begin with `0x` and have exactly 2 more characters, which may be
// uppercase `A-F` or lowercase `a-f` or any digit.

// Here's a template that you can use:

//   module.exports = function (str) {
//     return /.../.test(str)
//   }

// Quantifiers work equally well with capture groups as they do with characters and
// character classes. There are more quantifiers aside from `+`, `*`, and `?`:

//   {n,m}  must occur at least n times but no more than m times
//   {n,}   must occur at least n times
//   {n}    must occur exactly n times

// To verify your solution, run:

  // regex-adventure verify solution.js
module.exports = function(str){
	return /^(0x[a-f\d]{2}\s+){8}$/i.test(str)
}
