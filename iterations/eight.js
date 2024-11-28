const myNums=[1,2,3,4];
// const total=myNums.reduce(function(acc,currVal){
//     return acc+currVal
// },0)
// reduce method by using normal function

const total=myNums.reduce((a,b)=> a+b,0)
// console.log(total);

const shoppingCart=[
    {
        itemName:"js course",
        price:3000
    },
    {
        itemName:"py course",
        price:1000
    },
    {
        itemName:"dsa course",
        price:6000
    },
    {
        itemName:"data science course",
        price:13000
    },
]

const totalAmount=shoppingCart.reduce((a,item)=>a+item.price,0);
console.log(totalAmount);
