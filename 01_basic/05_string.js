// let gameName = "Marvel";
// let newString = gameName.substring(0, 4)
// console.log(newString);

// let sliceString = gameName.slice(0, 5);

// sliceStringMinus = gameName.slice(-5);
// console.log(sliceStringMinus);

// console.log(sliceString);

// let trimString = "          Heroes      "
// console.log(trimString);
// console.log(trimString.trim());

let url = "https://google.com/wiki%20pedia";
let newUrl = url.includes("%20");
console.log(newUrl);

console.log(newUrl ? url.replace("%20", "_") : url);

let splitString = "Hello-Good-Morning-Everyone";
let newString = splitString.split("-")
console.log(String(newString.slice(1, 3)).replace(",", " "));

