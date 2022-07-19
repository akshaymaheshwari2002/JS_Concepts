// function along with it's lexical scope bundeled together forms a closure.

// Uses of closure ->
// 1 .  Currying
// 2 .  data hiding and encapsulation
// 3. setTimeout

// Disadvantages ->
// 1. over consumption of memory if we use close.
// 2. It can lead of memory leak if not handeled properly.

// Example 

function abc() {
    let p= 12;
    return function def() {
        console.log("DEF is called", p);
    }
}
abc()();