const user = {
    username: "Vijay",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to webiste`);
        // console.log(this);
        // this keyword refers to the current context of the code 

    }
}

// user.welcomeMessage()
// user.username = "Sam";
// user.welcomeMessage()
// console.log(this);
// if we console this here then it will refer to the empty object

// function chai() {
//     let username = "Vijay"
//     console.log(this.username);
//     // here we can't this keyword , as this keyword not work in function, it is only work in object
// if we just console this keyword then we will get some methods and objects
// }
// chai()


// const chai = () => {
//     let username = "vijay";
//     console.log(this);
//     // if we console this in arrow function then we will get empty object
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
//     // this arrow function called implicit return , when we use curly braces we need to use return keyword
// }

// this is implict return where we don't need to write return keyword ,type 1
// const addTwo = (num1, num2) => num1 + num2

//type 2 . in this type we can use parenthesis for better visibility
// const addTwo = (num1, num2) => (num1 + num2)

// if we don't wrap in parenthesis and want to return object then it will give undefined
//const addTwo = (num1, num2) => { username: "Vijay" } // getting undefined in console

const addTwo = (num1, num2) => ({ username: "Vijay" })
// if we want to use object then we need to wrap it with ()
console.log(addTwo(3, 4));

/*
When to Use:
Arrow functions: Use when you need concise syntax and want to preserve the this context from the outer scope (e.g., in callbacks or methods).
Normal functions: Use when you need more control over this, want to use the function as a constructor, or require the arguments object.
 */
