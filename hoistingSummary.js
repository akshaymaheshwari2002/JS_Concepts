// Hoisting is the default behaviour of javaScript of moving declaration to the top.
// a = 5;
// var a ;


// variables decrlared with let and const are hoisted.
// but are not initialized. We can't use untill it has been declared.
// a = 12;
// variables is in temporal dead zone from the start of the block untill it is declared
// let a;
// console.log(a);
console.log(a);
let a; 

// javaScript initializations are not hoisted, only declarations are hoisted.