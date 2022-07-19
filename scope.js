// in javascript, scope defines the accessibility of a variable or object or function 
// throught the program

// In js we have three types of scope ->
// 1. block scope
// 2. functional scope
// 3. global scope

// block scope -> variables defined inside of the block can't access outside of the block.
// in js let and const have block scoped.
// {
//     let a = 10;
//     console.log("A inside scope", a);
// }
// console.log("A outside of block , ", a);

// {
//      a  = 12;
//     console.log("Inside", a);
// }
// console.log("outside", a);

// functional scope
// function abc() {
//     let a = 10;
//     var p = 12;
//     console.log("inside function", a,p);
// }

// abc();
// console.log(a,p);

// global scope
// variables declared outside of the function have global scope.
// global variables can be accessed anywhere inside the program

let name = "Akshay";