// let arr = [
//   {
//     name: "Akshay",
//     age: 21,
//   },
//   {
//     name: "Raj",
//     age: 24,
//   },
//   {
//     name: "Akshay",
//     age: 27,
//   },
//   {
//     name: "Abkit",
//     age: 2,
//   },
// ];

// let p = [1, 2, 2, 6, 2, 3, 4, 333, 22];

// p.sort();
// // console.log(p);

// function sortArr(arr, key) {
//   return arr.sort(function (a, b) {
//     let f = a[key];
//     let l = b[key];
//     console.log(a, b);
//     if (f < l) {
//       console.log("F < l", f, l);
//       return -1;
//     }
//     if (f > l) {
//       console.log("f > l", f, l);
//       return 1;
//     }
//     return 0;
//   });
// }

// console.log("ARraty", sortArr(arr, "name"));

let arr = [
  {
    name: "Akshay",
    age: 21,
  },
  {
    name: "Raj",
    age: 24,
  },
  {
    name: "Akshay",
    age: 27,
  },
  {
    name: "Abkit",
    age: 2,
  },
];

function sortingWork(arr, key) {
  return arr.sort(function (a, b) {
    let f = a[key];
    let l = b[key];
    if (f < l) {
      return -1;
    }
    if (f > l) {
      return 1;
    }
    return 0;
  });
}

console.log(sortingWork(arr, "age"));
