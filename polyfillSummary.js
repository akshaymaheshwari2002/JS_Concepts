// polyFull is a piece of code written in order 
// to achieve the modern functionality in older browsers.

let obj = {
    name : "Ankit",
    age : "31"
}

let printDetail = function(state, country) {
    console.log(this.name + " "+this.age + " "+ state + " " + country);
}

Function.prototype.myBind = function (...args) {
    let otherArgs = args.slice(1);
    let myFunction = this;
  return function (...args2) {
     myFunction.apply(args[0], [...otherArgs, args2]);
  }
}

let func =  printDetail.myBind(obj, "UP");
func("India");