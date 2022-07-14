// Sometimes we need a bluePrint for creating multiple objects of the same type.
// this way to create an object type uses the object constructor function.

function abc(name, age) {
    this.name = name;
    this.age = age;
}

let obj1 = new abc("akshay", 22);
let obj2 = new abc("Ankit", 30);

console.log("Objects", obj1, obj2)


// javascript have some builtInConstructor as well.
// new String() // a new string object
let str = new String("Akshay");

let obj = new Object({
    name : "Ankitaa",
    age : 26
})
console.log(str, obj); 