let obj = {
  a: {
    abc: function abc() {
      return "Hello";
    },
  },
};

let copyObj = {};

for (let x in obj) {
  copyObj[x] = obj[x];
}

// Object.assign(copyObj, obj);

copyObj["name"] = "akshay";
copyObj["a"]['def']['name']['firstName'] = "Ankit"
console.log("ORIGINAL OBJ",  obj.a.def.name.firstName, "copy OBj", copyObj.a.def.name.firstName, "hhh", copyObj);
