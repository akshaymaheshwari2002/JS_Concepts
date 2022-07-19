// call apply and bind in js

let obj = {
    name :"Akshay",
    age : "21"
}

let printFullDetail=  function (state, country) {
    console.log(this.name + " age is " + this.age + " from " + state +  " " + country);
}

let obj2 = {
    name : "Ankit",
    age : '31'
}


// call method
printFullDetail.call(obj2, "Up", "India");

// apply method
printFullDetail.apply(obj , ["Hariyana", "India"]);

// bind method 
let func =  printFullDetail.bind(obj2, "MP", "India");
func();

