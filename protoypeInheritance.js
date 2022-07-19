let obj1 = {
    name : "Akshay",
    age : "21"
}

let obj2 = {
    name : "Ankit",
    age : "29",
    city : "Bareilly",
    __proto__  : obj1
}

console.log("Obj222", obj2.name, obj2.__proto__.__proto__);