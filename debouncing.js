// let count = 0;
// let myDebounceFunction = function (fn, d) {
//   let timer;
//   return function () {
//     let context = this;
//     args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       apiCallingFunction.apply(context, arguments);
//     }, [d]);
//   };
// };

// let apiCallingFunction = () => {
//   console.log("API CALLING IS THERE", count++);
// };

// let magicFunction = myDebounceFunction(apiCallingFunction, 300);

let p = 0;

let apiCallingFunction = function () {
  console.log("APi calling is there"), p++;
};

let myDebounceFunction = function (fn, d) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

let magicFunction = myDebounce(apiCallingFunction, 300);
