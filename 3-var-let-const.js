console.log("JavaScript tutorial 3: var, let and const")
let a = 45
{let a = "p" // within bracket var wont work, let only work
 console.log(a)
}
console.log(a)
// let a =5 // a is defined already can not be redeclared, but in case of {} we can use. var will use multiple times

// const author = "Harry"
// author = 5 // Throws an error because author is constant cannot be changed