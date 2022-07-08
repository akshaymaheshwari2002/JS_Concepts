let obj = {
    name : "Ajay",
    city : "Bareilly",
    fullDetail : function () {
        return this.name + " " + "from" + " " + this.city;
    }
} 
// console.log("OBJ", obj.fullDetail());

let obj2 = {
    name : "Ankit",
    __proto__ : obj
}

// never do this
// obj2.__proto__ = obj;

console.log("Objjj", obj2.fullDetail(), obj, obj2,obj2.__proto__.__proto__);

// Function.prototype.myBind = function () {

// }

