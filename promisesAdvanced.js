// let firstPromise = new Promise((resolve, reject) => {
//   let a = 1,
//     b = 2;
//   if (a + b === 3) {
//     resolve("Resolved first");
//   } else {
//     reject("Reject first");
//   }
// });

// let secondPromise =  new Promise((resolve, reject) => {
//   let a = true;
//   if (!a) {
//     resolve("Resolved second");
//   } else {
//     reject("Rejected second");
//   }
// });

// // Promise.allSettled([ secondPromise, firstPromise])
// //   .then((results) => {
// //     console.log("Promise resultss", results);
// //   });
// //   .catch((error) => {
// //     console.log("Errors", error);
// //   });

// // firstPromise
// //   .then(() => {
// //     console.log("promise is resolveddd");
// //   })
// //   .catch((error) => {
// //     console.log("Promise is rejected");
// //   });


// let p =  Promise.all([firstPromise, secondPromise]);
// console.log("Promise", p);

// setTimeout(() => {
//     console.log("Stack is clear", p);
// })


// const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
// const p = Promise.all(mixedPromisesArray);
// console.log(p);
// setTimeout(function() {
//     console.log('the stack is now empty');
//     console.log(p);
// });

const pErr = new Promise((resolve, reject) => {
    reject("Always fails");
  });
  
  const pSlow = new Promise((resolve, reject) => {
    setTimeout(reject, 500, "Done eventually");
  });
  
  const pFast = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "Done quick");
  });
  
  Promise.any([pErr, pSlow, pFast]).then((value) => {
    console.log(value);
    // pFast fulfills first
  })