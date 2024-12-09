// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData()
//         }
//     },2000)
    
    
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4)
//         })
//     })
// }) 
// this will occur callback hell problem so to overcome this problem we will promises

let promise=new Promise((resolve,reject)=>{
    console.log("I am a promise");
    reject("Some Error Occured")
    
})