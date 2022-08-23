// find the index which give the given sum

// method 1
// let arr = [1, 2, 3, 4, 5],
//   sum = 90;

// for (let i = 0; i < arr.length -  1; i++) {
//   for (let j = i + 1; j < arr.length ; j++) {
//     if (arr[i] + arr[j] === sum) {
//       console.log(i, j);
//       return;
//     }
//   }
// }

// j < 4
// 0,1,2,3

// method 2

function caclulateIndex(arr, sum) {
  let s = new Set();
  for (let i = 0; i < arr.length; i++) {
    let temp = sum - arr[i];

    if (s.has(temp)) {
      //   console.log("PAIR IS THERE", i, arr.indexOf(temp));
    }
    s.add(arr[i]);
  }
}

let arr = [1, 2, 3, 4, 5, 6],
  sum = 9;

caclulateIndex(arr, sum);

let dummy = {
  price: 4502,
  get_price: function () {
    return this.price;
  },
};

let realObj = Object.create(dummy);

realObj.price = 120000;

delete realObj.price;

console.log("Dummy", dummy, "realObj", realObj.price);
