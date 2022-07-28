// let getData = async () => {
//     console.log("inside function get data");
//     let msg = await "Hello World";
//     return msg;
// }

// console.log("Before function called");

// let p = getData();
// console.log("Get data function called", p);
// console.log("Get data function called", p);
// console.log("Get data function called", p);
// console.log("Get data function called", p);
// console.log("Get data function called", p);

const getData = async function () {
  var y = await "Hello World";
  console.log(y);
  return y;
};

console.log(1);
getData().then((res) => console.log("Resolutt", res));
console.log(2);
