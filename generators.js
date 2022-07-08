// function * generatorFunction () {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let generatorObj = generatorFunction();
// console.log(generatorObj.next());
// console.log(generatorObj.next());
// console.log(generatorObj.next());


function * generatorFunction () {
   let a = 1;
   while(true) {
    yield a++;
   }
}

let generatorObj = generatorFunction();
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
