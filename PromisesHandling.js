let promiseOne = new Promise((resolve, reject) => {
  let a = 1,
    b = 1;
  if (a === b) {
    resolve();
  } else {
    reject();
  }
});

let promiseTwo = new Promise((resolve, reject) => {
  let a = 1,
    b = 1;
  if (a !== b) {
    resolve();
  } else {
    reject();
  }
});


Promise.race([promiseOne, promiseTwo])
  .then((results) => {
    console.log("Resultss", results);
  })
  .catch((err) => {
    console.log("Error", err);
  });



// console.log("Final result", finalResult);
