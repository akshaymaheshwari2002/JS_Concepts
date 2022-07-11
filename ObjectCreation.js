// using object literal 

// let obj = {
//     name : "akshay",
//     age : 21
// }
// console.log("Obj", obj);




// using Object.create(oldObject);

// let obj = {
//     name : "akshay",
//     age : 21
// }

// let newObj = Object.create(obj);

// newObj.name  = "Ankit";

// console.log("Obj, ", obj, "New obj", newObj);



// using a constructor.... constructor is a function created using new keyword.

// function Vehicle (name, color) {
//     this.name = name;
//     this.color = color ;
// }

// var obj = new Vehicle("Car", "Red");

// console.log("Obj", obj);



// using ES6 classes

class Vehicle {
    constructor(name, maker, engine) {
      this.name = name;
      this.maker =  maker;
      this.engine = engine;
    }
  }
    
  let car1 = new Vehicle('GT', 'BMW', '1998cc');
    
  console.log(car1); 


