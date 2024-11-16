
var c = 400;
if (true) {
    let a = 10;
    const b = 20;
    c = 30;
}
// console.log(a);
// console.log(b);
// due to scope it is not adivisable to use var in js

// console.log(c);

function one() {
    const userName = "Vijay"

    function two() {
        const website = "youtube"
        console.log(userName);

    }
    // console.log(website);
    two()
}
// one()
// here we can access variable of one inside function two , but we
// can't access variable of function two inside function one due scope

//####### Interesting fact #############
console.log(addOne(5));

function addOne(num) {
    return num + 1;
}




// console.log(addTwo(5));

const addTwo = function (num) {
    return num + 2;
}
// Due to hoisting addTwo function is giving an error  Cannot access 'addTwo' before initialization
// if we store function in a variable then we can't use it before its initialization 