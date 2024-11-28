const coding=['js','ts','java','python','cpp'];
// coding.forEach(function(item){
//     console.log(item);
    
// }) 
// for each example by using simple function

// coding.forEach((item)=>{
//     console.log(item);
    
// })
// for each example by using arrow function

function printMe(item){
    console.log(item);
    
}

// coding.forEach(printMe)
// here in forEach we can passing directly pass function as well

coding.forEach((item,index,arr)=>{
// console.log(item,index,arr);

})
// here for each loop has three things iterator parameter , index , and whole array


const myCoding=[
    {
        languageName:"javascript",
        languageFileName:'js'
    },
    {
        languageName:"typescript",
        languageFileName:'ts'
    },
    {
        languageName:"python",
        languageFileName:'py'
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName + " " + item.languageName);
    
})