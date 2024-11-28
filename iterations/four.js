const myObj={
    js:"Javascript",
    ts:"Typescript",
    cpp:"C++"
}
for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
    
}
const programming=['js','ts','py','java','rb'];
for (const key in programming) {
//   console.log(programming[key]);
  
}

const map= new Map()
map.set('IN','India');
map.set('Aus','Austrilia');
map.set('IN','India');
// console.log(map);

 for (const key in map) {
   //console.log(key);
   // here in for in loop we are not geting any value and error because map is not iterable
 }