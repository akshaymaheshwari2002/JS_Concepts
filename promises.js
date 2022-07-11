const p = new Promise((resolve, reject) => {
    // let num = 1 + 12 ;
    let num = 1 + 2 ;
    if(num === 3) {
        resolve("Promise is resolved");
    }
    else {
        reject("Promise is rejected");
    }
})

p.then((msg) => {
   console.log("then is called", msg);
}).catch((error) => {
    console.log("Catch", error);
} )
