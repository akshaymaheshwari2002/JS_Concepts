// new keyword in javaScript
// In javaScript new keyword is used to create the instance of an object that has a constructor 
// fucntion. So we call that constructor function by using the new keyword and can create and object instance. 

function myFunction(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

let obj =  new myFunction(1,2,3);
console.log("Object", obj);

function myFunctionTwo(a,b,c) {
    let p = 12;
    this.a = a;
    this.b = b;
    this.c = c;
}

myFunctionTwo.prototype.q = 1234;

let obj1 =  new myFunctionTwo(14,24,35);
console.log("Object", obj1, obj1.q, Object.keys(obj1).length);

