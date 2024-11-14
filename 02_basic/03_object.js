//singleton
//Object.create

const mySym = Symbol("Key1")
console.log(typeof mySym);

//Object literals
const jsUser = {
    name: "vijay",
    "full name": "Vijay Yadav",
    [mySym]: "my key 1",
    age: 24,
    email: "vijay12@gmail.com",
    isLoggedIn: false,
    LastLoggedInDays: ["Monday", "saturday"]
}
// console.log(jsUser["full name"]);
// console.log(jsUser["name"]);
jsUser.email = "vijay@chatgpt.com";
// console.log(jsUser.email);

// Object.freeze(jsUser)
jsUser.email = "vijay@microsoft.com";

// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello Everyone")
}
jsUser.greeting2 = function () {
    console.log(`Hello Everyone this side ${this.name}`);

}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());




