// function addTwoNumber(num1, num2) {
//     return num1 + num2
// }
// const result = addTwoNumber(3, 4);
// console.log(result);


// function loggedInUser(username) {
//     if (!username) {
//         console.log('Please enter user name');
//         return

//     } else if (typeof username !== "string") {
//         console.log('Please enter user name in string value');
//         return
//     }
//     return `${username} Just Logged In!!`
// }
// console.log(loggedInUser(1))

// function calculateCartPrice(value1, value2, ...num) {
//     return num;
// }
// console.log(calculateCartPrice(200, 300, 400, 500));

// const user = {
//     userName: "vijay",
//     age: 24
// }
// function handleObject(anyObject) {
//     console.log(`User name is ${anyObject.userName} and age is ${anyObject.age}`);
// }
// handleObject(user);
// handleObject({
//     userName: "sam",
//     age: 23
// })

const myNewArray = [200, 300, 400, 500];

function returnArrayValue(anyArray) {
    console.log(anyArray[0])
}
returnArrayValue(myNewArray);
returnArrayValue([1, 2, 3])