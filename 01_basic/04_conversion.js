// console.log("2" > 1); // output = > true
// console.log("02" > 1); // output => true as js convert string to the number


console.log(null > 0); // false 
console.log(null == 0); // false
console.log(null >= 0); // true

/* The reason is that an equality check == and comparisons > <> = <= work differently. Comparisons convert null to a number and treating it as 0. That's why (3) null >= is true and (1) null>0 is false*/



