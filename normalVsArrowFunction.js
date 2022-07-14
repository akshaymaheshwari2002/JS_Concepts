// difference between normal functions and arrow functions.

// 1. we can't use this keyword inside arrow functions
// unlike regular functions, arrow functions do not have their own this.

let obj = {
  name: "Akshay",
  age: 21,
  fullDetailThroughArrowFunction: () => {
    console.log("My name is " + this.name);
  },
  fullDetailThroughRegularFunction: function () {
    console.log("My name is... " + this.name);
  },
};

obj.fullDetailThroughArrowFunction();
obj.fullDetailThroughRegularFunction();

// 2. Availability of arguments object in arrow functions -> 
// argumentas objects  are not available in arrow functions but are available in regular functions

function abc() {
    console.log("Regular function arguments", arguments);


abc(1,2,3,4);

let myFunction = function() {
    console.log("Arguments in anonymos function", arguments);
}
myFunction(4,5,65);

let myArrowFunction = () => {
    console.log("Arguments in arrow functionss", ...arguments);
}
myArrowFunction(3,4,5);


let user = {     
    show_ar : () => {
    console.log(...arguments);
}
};
user.show_ar(1, 2, 3);


// 3. using new keyword
// Regular functions created using function declarations or expressions are 
// constructible and callable. Since regular functions are constructible, 
// they can be called using the new keyword.

// However, the arrow functions are only callable and not constructible,
//  i.e arrow functions can never be used as constructor functions. Hence, 
// hey can never be invoked with the new keyword.

function adc() {
    console.log("ADC is called");
}

new adc();

let p = () => 
{
    console.log("P IS CALLEd");
}
// new p();


// 4. No duplicate named parameters
// Arrow functions can't have duplicate name parameters whether in strict mode or non-strict mode.

function duplicateArguments (x,x) {
    console.log("Duplicate", x, x);
}

new duplicateArguments(2,3);

let pr = (x, x) => {
   console.log("X IS THERE", x,x);
}
pr(2,3);