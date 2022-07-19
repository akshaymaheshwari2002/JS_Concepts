let obj = {
    name : "Akshay",
    age : "21",
    parent : {
        name : "V",
        parent: {
            name : "c",
            parent : {
                name : "L"
            }
        }
    },
    fullDetail : function() {
        console.log (this.name + this.age)
    }
};
// let obj2  ={
//     ...obj
// }

let obj2 = Object.assign({}, obj)

// let obj2 = JSON.parse(JSON.stringify(obj));

// let obj2 = obj;

obj2.name = "Riya";
obj2.parent.parent['age'] = 100;

console.log("Obj1   ", obj, obj2)