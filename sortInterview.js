// let arr = [
//   {
//     name: "Akshay",
//     age: 21,
//   },
//   {
//     name: "Deepak",
//     age: 5,
//   },
//   {
//     name: "Aksha",
//     age: 20,
//   },
//   {
//     name: "Ankit",
//     age: 30,
//   },
// ];

// function mySortingFunction(arr, key) {
//   return arr.sort(function (a, b) {
//     let f = a[key];
//     let s = b[key];
//     if (f < s) {
//       return -1;
//     }
//     if (f > s) {
//       return 1;
//     }
//     return 0;
//   });
// }

// console.log(mySortingFunction(arr, "age"));

function myfunction(a, b, c) {
  return a + b + c;
}

function outer(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let p = outer(5)(4)(6);

console.log();
