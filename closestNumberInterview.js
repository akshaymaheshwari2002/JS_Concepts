let arr = [10, 20, 30, 40, 60];
let goal = 35;

let finalNumber = arr.reduce(function (prev, next) {
  return Math.abs(next - goal) < Math.abs(prev - goal) ? next : prev;
});

console.log(finalNumber);
