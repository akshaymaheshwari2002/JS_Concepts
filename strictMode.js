// "use strict" defines that javaScript code should be executed in strict mode. In Strict mode, 
// js engine will throw the error for which 

// we need to declare the variable in strict mode
// a = 10; will throw error

o = 12;
function abc() {
    "use strict"
    l= 12;
}

abc();

// deleting a variable is not allowed in strict mode
// let r = 12;
// delete r;
//

// deleting a function is not allowd in strict mode

// duplicating the parameters name is not allowed in functions in strict mode in javascript
// function avg(s,s) {

// }