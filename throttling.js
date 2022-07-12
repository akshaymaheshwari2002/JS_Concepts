let throttledFunction = () => {
  console.log("Throttled function called");
};

let throttle = (fn, limit) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterFunction = throttle(throttledFunction, 1000);

window.addEventListener("resize", betterFunction);

const normalFunc = () => {
  console.count("Normal Function");
};

window.addEventListener("resize", normalFunc);
