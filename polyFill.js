// let obj = {
//   name: "Ankit",
//   country: "India",
// };

// let printFullDetail = function (age, state) {
//   console.log(this.name + " of age " + age  + " from state " + state + " and from country " + this.country);
// };

// let bindCaller = printFullDetail.bind(obj, 31);
// bindCaller("UP");

// let obj2 = {
//     name: "Akshay",
//     country: "India",
//   };

// Function.prototype.myBind = function (...args) {
//   let myFunction = this;
//   let outerArgs = args.slice(1);
//   return function (...args2) {
//     myFunction.apply(args[0], [...outerArgs, args2]);
//   };
// };

// let bindCaller2 = printFullDetail.myBind(obj2, 21);
// bindCaller2("Hariyana");

let obj = {
  name: "Akshay",
  age: 21,
};

let printFullDetail = function (state, country) {
  console.log(this.name + " " + this.age + state + country);
};

Function.prototype.myBind = function (...args1) {
  let myFunc = this;
  let outerParams = args1.slice(1);
  return function (...args2) {
    myFunc.apply(args1[0], [...outerParams, ...args2]);
  };
};

let bindCaller = printFullDetail.myBind(obj, "UP");

bindCaller("India");
