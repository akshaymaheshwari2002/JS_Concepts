function sumNumbers(a) {
   function inner(b) {
     function innest(c) {
      return a + b + c;
    };
    return innest
  };
  return inner;
}

console.log(sumNumbers(1)(2)(3));
