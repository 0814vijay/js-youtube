// Immediately Invoked Function Expression (IIFE)
/* IIFE stands for Immediately Invoked Function Expression. It is a function that is defined and executed immediately after its creation. The primary purpose of an IIFE is to create a private scope to avoid polluting the global scope, particularly in situations where you want to isolate variables or logic.
*/

// (function chai() {
// named IIFE
//     console.log("Chai with normal function IIFE");

// })();

// (() => {
//unnamed IIFE
//     console.log("Chai with arrow function IIFE");

// })();

// (function () {
//     let counter = 0;
//     console.log('Counter value:', counter);
//     counter++;
// })();
// console.log(counter);
//In the above example, counter is scoped within the IIFE and cannot be accessed from the outside, preventing global scope pollution.

//Example with a return value
const result = (function () {
    let a = 2;
    let b = 4;
    return a + b;
})();
//In this case, the function is executed immediately, and the result (5) is returned and stored in the result variable.

// console.log(result);

((dbname) => {
    console.log(`DB connect to ${dbname}`);

})("SQL");
// In this way we can pass arguments in IIFE function

/* 
Use Cases:
Avoid Global Variables: When working in large codebases, IIFEs help prevent accidental overwriting of global variables.
Module Pattern: Before the advent of ES6 modules, IIFEs were commonly used to create modules, encapsulating related code.
Asynchronous code: IIFEs are sometimes used to immediately execute asynchronous logic, especially when combined with promises or async/await.
*/

/* 
Conclusion:
IIFEs are a useful feature in JavaScript for managing scope, avoiding global pollution, and organizing code in a cleaner, more modular way.
*/
