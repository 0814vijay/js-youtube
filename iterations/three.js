// const myArray=[1,2,3,4,5];
// for (const value of myArray) {
//     console.log(value);
    
// }


const greetings="Hello World!"
for (const greet of greetings) {
   
    // console.log(greet);
    
}


//Maps --> Map is used to store unique key value pair and value in specific order
const map= new Map()
map.set('IN','India');
map.set('Aus','Austrilia');
map.set('IN','India');
// console.log(map);

for (const  [key,value] of map) {
    // console.log(key , " :-" , value);
    
}

const myObj={
    game1:"Mario",
    game2:"Contra"
}
for (const  [key ,value] of myObj) {
    // console.log(key , " :-" , value);
    // here we are getting error like object are not iterable so we can't use for of loop here
}