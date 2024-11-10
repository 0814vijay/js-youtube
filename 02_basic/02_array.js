const marvel_Heros = ['thor', 'Ironman', 'spiderman'];
const dc_Heros = ['superman', 'flash', 'batman'];
// marvel_Heros.push(dc_Heros);
// console.log(marvel_Heros.length);
// console.log(marvel_Heros[3][0]);


// const all_Heros = marvel_Heros.concat(dc_Heros);
// console.log(all_Heros);
/*push(): Adds elements to the end of the original array. Modifies the array and returns the new length.
concat(): Combines two or more arrays (or values) into a new array without modifying the original arrays.
Spread Operator (...): Combines arrays (or values) into a new array similarly to concat(),
but it's more concise and syntactically flexible.*/

// const all_New_Heros = [...marvel_Heros, ...dc_Heros];
// console.log(all_New_Heros);

// const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// console.log(arr1.length);
// const arr2 = arr1.flat(Infinity);
// console.log(arr2.length);
/*flat() method in JavaScript is used to flatten an array, meaning it reduces the depth of nested arrays by merging them into a single array.
 It "flattens" nested arrays into a single array, and you can specify how deep you want to flatten the array.
 array.flat(depth);
 depth: (Optional) The number of levels to flatten. Default is 1. You can use Infinity to flatten any depth of nested arrays.*/

// console.log(Array.isArray("Vijay"));
// console.log(Array.from("Vijay"));
// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1, score2, score3))

/*

// 1. Array.isArray()
console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray('hello'));    // false

// 2. Array.from()
console.log(Array.from('hello'));  // ['h', 'e', 'l', 'l', 'o']
console.log(Array.from([1, 2, 3], x => x * 2));  // [2, 4, 6]

// 3. Array.of()
console.log(Array.of(1, 2, 3));  // [1, 2, 3]
console.log(Array.of(5));        // [5]

// 4. Array()
console.log(new Array(3));   // [undefined, undefined, undefined]
console.log(new Array(1, 2)); // [1, 2]


Array.isArray() is for checking if something is an array.
Array.from() is for creating a new array from an array-like or iterable object.
Array.of() creates a new array from the arguments passed to it, useful for creating arrays without confusing behavior like the Array() constructor.
Array() (the constructor) can create arrays with a specified length or with elements, but it can behave unpredictably if you pass a single number.
*/

