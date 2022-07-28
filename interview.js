let arr = [1,2,3,4,2,9,10,11,13,33,12,11];

function duplicate(arr) {
    let obj = {};
    arr.map((element, index) => {
        if(!obj.hasOwnProperty(element)) {
            obj[element] = 1;
        }
        else {
            arr.splice(index, 1)
        }
      
    });

}

duplicate(arr);
console.log("New Array", "Old Array", arr);
