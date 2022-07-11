let obj1 = {
    name : "akshay",
    state : "Hariyana"
}

let obj2 = {
    name : "Riya",
    state : "UP"
}

let fullDetail = function (country, gender) {
    console.log(this.name + " is from " + this.state + "and is an " + country + " " + gender);
}

fullDetail.call(obj1, "India", "men");
fullDetail.call(obj2, "Indian", "women");