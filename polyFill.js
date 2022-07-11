let obj = {
  name: "Ankit",
  country: "India",
};

let printFullDetail = function (age, state) {
  console.log(this.name + " of age " + age  + " from state " + state + " and from country " + this.country);
};

let bindCaller = printFullDetail.bind(obj, 31);
bindCaller("UP");


let obj2 = {
    name: "Akshay",
    country: "India",
  };


Function.prototype.myBind = function (...args) {
  let myFunction = this;
  let outerArgs = args.slice(1);
  return function (...args2) {
    myFunction.apply(args[0], [...outerArgs, args2]);
  };
};

let bindCaller2 = printFullDetail.myBind(obj2, 21);
bindCaller2("Hariyana");
