const accountNumber = 12343435;
let accountName = "Vijay";
var accountEmail = "vijay@gmail.com";
accountState = "MP";
let accountCity;
// we can't reassign value in const keyword   --> this is single line comment
// accountNumber=1233; 
console.log(accountNumber);
accountName = "Vijay Yadav";
accountEmail = "vijay12@gmail.com";
accountState = "Madhya Pradesh";
accountCity = "Chhindwara";
/*  
This is multi line comment 

we can reassign value in let and var 

Prefer not to use var because of block scope and functional scope

*/
console.table([accountNumber, accountName, accountEmail, accountState, accountCity]);
