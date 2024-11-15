const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = Object.assign(obj1, obj2)
// when we combine object it treated first element as a target , other passing data elements as sources

// const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);
// console.log(obj1);

// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))
// console.log(Object.entries(obj1));

// console.log(obj1.hasOwnProperty('isLoggedIn'));
// console.log(obj1.hasOwnProperty('1'));

const course = {
    courseName: "js in hindi",
    price: "999",
    instructor: "hitesh"
}
const { instructor: ins } = course;
// we can rename value as per our requirement , if we rename that value then we need to rename value only
// we can't use previous value in this case 
// console.log(instructor);
console.log(ins);

