function *  myGenerator() {
  // yield 1;
  // yield 2;
  // yield 3;
  let id = 1;
  while (true) {
    yield id;
    id++;
  }
}

let a = myGenerator();
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
