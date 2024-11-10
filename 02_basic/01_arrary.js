const myArr1 = [1, 2, 3, 4, 5];
// console.log(myArr1.length);

// const myArr2 = new Array(1, 2, 3);
// console.log(myArr2);
//#################### Difference Between Shallow Copy and Deep Copy ############################
/*
Shallow Copy: A shallow copy means that only the outer level of the original array (or object) is copied.
 If the array contains references to other objects (like arrays or objects), the references are copied, 
 not the actual objects. Therefore, changes to the nested objects will affect both the original and copied array.

Deep Copy: A deep copy means creating a new array and recursively copying all the elements, 

including nested objects or arrays. This ensures that even nested arrays or objects
 are independent of the original array.
*/
const temp = [...myArr1];

//Array Methods
if (temp.length < 3) {
    temp.push(6)
} else {
    temp.pop()
}
// console.log(temp, myArr1);
//push method add the element in the last index of an array
//pop method remove the  element from the last index of an array

//unshift method  add the element in the first index of an array
//shift method remove the element from the first index of an array

// myArr1.unshift(9);
// console.log(myArr1);
// myArr1.shift();
// console.log(myArr1);

// console.log(myArr1.includes(3));
// console.log(myArr1.indexOf(3));

//includes return a boolean value , which specify the given value exist or not
//indexOf method give the index of given value exist in the array
//if given values doesn't exist then it will -1 which means value doesn't exist


// const newArr1 = myArr1.join();
// console.log(newArr1);
// console.log(typeof newArr1);
// join method copy the value of array , but its type is string


// console.log(myArr1, "A");

// const myn1 = myArr1.slice(1, 3);
// console.log(myn1, "Array After Applying slice ");
// console.log(myArr1, "Original Array");

// const myn2 = myArr1.splice(1, 3);
// console.log(myn2, "Array After Applying slice ");
// console.log(myArr1, "Original Array");


/*
slice(): Returns a new array, does not modify the original.
splice(): Modifies the original array and returns the removed elements.

*/


