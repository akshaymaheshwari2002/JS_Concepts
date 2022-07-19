async function avc() {
    console.log("Inside avc");
    let  p = await "Hello";
    console.log("p");
    return p;
}
console.log("Before calling avc");
let func = avc();
console.log(func);
func.then((data) => {
    console.log("Promise Resolved", data);
})
console.log("After calling avc");