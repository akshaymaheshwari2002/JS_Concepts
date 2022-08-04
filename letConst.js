let a = 1234567;

const b = 2345;

// shadowing in js

{
  a = 12;
  var c = 1234;
  const b = 34;
}

console.log(b);

let p = 345;

{
  let p = 123;
}

console.log(p);

// illegal shaddowing in js

let r = 34;

{
  var r = 56;
}
