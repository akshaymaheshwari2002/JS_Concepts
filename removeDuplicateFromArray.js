let arr = [1,2,3,4,2,2,3,3,6,6,7,7,8,9,10,11,13,33,12,11];

function removeDuplicate(arr) {
    let obj = {};
    let newArr = [];
    arr.map(element => {
        if(!obj.hasOwnProperty(element)) {
            obj[element] = 1;
            newArr.push(element);
        }
    });
    return newArr 
}

let newlyCreatedArray =  removeDuplicate(arr);
console.log("New Array", newlyCreatedArray, "Old Array", arr);
