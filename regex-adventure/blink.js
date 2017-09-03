// Implement a custom markdown operator that will translate all text between
// `@@...@@` and into `<blink>...</blink>` tags.

// For example, `@@whatever@@` becomes `<blink>whatever</blink>`.

// In addition to the `@@...@@` operator, your code should support existing markdown
// syntax, including inside `@@...@@` operators.

// Your code should accept a string of markdown as input and return a string of
// html output. Here's a template that you can use:

//   module.exports = function (str) {
//     /* return html string */
//   }

// For this task, use the `marked` module: `npm install marked`

// To verify your solution, run:

function blink (str){
var reg =  str.replace(/@@([^@@]*)@@/g, "<blink>" + "$1" + "</blink>" )
.replace(/\*\*([^\*\*]*)\*\*/g, "<strong>" + "$1" + "</strong>" )
.replace(/\*([^\*]*)\*/g, "<em>" + "$1" + "</em>" )
.replace(/__([^__]*)__/g, "<strong>" + "$1" + "</strong>" )


return '<p>' + reg + '</p>'
 
}
module.exports = blink

console.log(blink('@@ is this coll@@ or na @@ orn aatd @@'))
// <p><blink> is this coll</blink> or na <blink> orn aatd </blink></p>
