// difference between map and forEach in javaScript

let arr1 = [2,3,4,5];
let p =  arr1.map((item) => {
    return item + 10;
})
console.log("P", p, arr1);


// difference between map and forEach in javaScript

let arr2 = [2,3,4,5];
let p1 =  arr2.forEach((item) => {
   item =  item + 100;
})
console.log("P", p1, arr2);


