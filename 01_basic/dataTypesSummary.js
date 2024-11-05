// Primitive data types -- > These are call-by-value.
/* There are 7 types of Primitive data types
String
Number
Boolean
null
undefined
Symbol
BigInt
*/


// Reference (Non Primitive Data Types) --> These are call-by-reference
/*
Array
Objects
Functions
 */

// JS is dynamically types language
/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness. */

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const heros = ["shakiman", "naagraj", "bheem"];
// console.log(typeof heros); // object

const myObj = {
    name: "Vijay",
    age: "24"
}
// console.log(typeof myObj);

// console.log(typeof id);

/* 
Primitive DataTypes:


1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

 Refence (Object Data Types):

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

4.Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.



lets talk about some Range of Primitive DataType:

    1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory.
*/

/*

                  Type                                   typeof

i)             Number                               number
ii)            String                                   string
iii)           Boolean                               boolean
iv)           Bigint                                   bigint
v)            Symbol                                symbol
vi)           Null                                      object
vii)          Undefined                           undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)

*/

const myFunction = function () {
    console.log("Hello World");
}

// console.log(typeof myFunction);

//************************ Stack and Heap******************************* */
/*
Primitive datatypes->
call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types ->
call by reference ( array,object, function) -> heap memory
*/

// Stack example , in stack we get the copy of the variable , so if we make any changes in copy , then it will not reflect to the original values
// let youtubeName = "chaiaurcode";
// let anotherName = youtubeName;
// anotherName = "js";
// console.log(youtubeName);
// console.log(anotherName);


// Heap example : In heap we get the reference of original value, if we make any changes in copy then it will reflect to the origianl one as well
// let myObj1 = {
//     email: "abc@gmail.com",
//     upi: "abc@ybl"
// }
// let myObj2 = myObj1
// myObj2.email = "vijay12@gmail.com";
// console.table([myObj1, myObj2]);
