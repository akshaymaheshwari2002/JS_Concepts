// var array = [1, 2, 3, 4, 5];
// for (var i = 0; i < array.length; i++) {
//   setTimeout(() => {
//     console.log("Hi", array[i]);
//   }, 1000);
// }

// above code create problem....

// solution 1

var array = [1, 2, 3, 4, 5];
for (var i = 0; i < array.length; i++) {
  //   setTimeout(() => {
  //     console.log("Hi", array[i]);
  //   }, 1000);
  myfunction(i);
}

function myfunction(i) {
  setTimeout(() => {
    console.log("Hoo", array[i]);
  }, 1000);
}

// sloution 2

for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log("Hi", array[i]);
  }, 1000);
}
