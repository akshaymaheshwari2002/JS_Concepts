// Object.freeze(name of object) is used to freeze the js objects
// after freezing the object we can't change properties or methods of obj.

let obj = {
    name : 
    "Akshay"
}
Object.freeze(obj);

obj.name= "Ankit";
console.log("Object", obj)