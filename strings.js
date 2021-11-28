// String indexing
let firstname="Deepayan Nandy"
console.log(firstname[4])
// string length
console.log(firstname.length);
//trim()
let name1="       Lipi     "
console.log(name1.length);
console.log(name1.trim())
console.log(name1.trim().length);
name1=name1.trim()
// upper case
console.log(name1.toUpperCase());
// lower case
console.log(name1.toLowerCase());
// Slicing
let startindex=0
let endindex=4
console.log(firstname.slice(startindex,endindex))

// Templating
let age=23
let myname="Deepayan Nandy"

let aboutme=`My name is ${myname} and my age is ${age}.`
console.log(aboutme);