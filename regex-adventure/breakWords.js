// Just like before, export a module that searches for `x=` followed by a number
// and return the number found after the equal sign.

// Unlike before, your solution should only match `x=` when there are no word
// characters immediately before `x=` or immediately after the number to the right
// of the equal sign.

// Here's a template that you can use:

//   module.exports = function (str) {
//     var m = /...your regex goes here.../.exec(str)
//     return m ? m[1] : null
//   }

// Use `(` and `)` to create a capture group like before.

// You can use a special type of anchor, `\b` to match when there is a break in a
// word.

// To verify your solution, run:

//   regex-adventure verify solution.js

module.exports = function(str){
	var m = /\bx=(\d+)\b/.exec(str)
	if(m){
		return m[1]
	}else{
		return null
	}
}