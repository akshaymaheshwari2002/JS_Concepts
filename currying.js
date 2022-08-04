function sumNumbers(a) {
  return function inner(b) {
    return function innest(c) {
      return a + b + c;
    };
  };
}

console.log(sumNumbers(1)(2)(3));

function abc(a, b, c) {
  return a + b + c;
}
