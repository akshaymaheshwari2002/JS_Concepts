// "use strict";
// p = 12;
// var a = "cat";
// (function () {
//   var a = "dog";
//   console.log(delete a);
//   a = "fish";
//   console.log(a);
// })();
// console.log(a);

// const p = "aKSHAY";

// function my(p) {
//   p = "DEEPAK";
//   console.log("Inside fun", p);
// }

// my(p);
// console.log("OUT SIDE ", p);

let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = (number) => number++;

const num1 = increaseNumber();
console.log("NUM ....", num);
const num2 = increasePassedNumber(num);

console.log(num1);
console.log(num2);
