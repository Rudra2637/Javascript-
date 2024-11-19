const obj1=[
    {
        name:"Rudra",
        age:19,
        year:2004
    },
    {
        name:"sujal",
        age:20,
        year:2003
    },
    {
        name:"jevan",
        age:22,
        year:2000
    }
]
const arr=[1,2,3,4,5]

// const num=arr.filter((item)=>item>3)
// console.log(num);

// const num=arr.map((items)=>items+10)
// .map((items)=>items+1)
// .filter((items)=>items>=15)
// console.log(num);
const order=[
    {
        name:"watch",
        price:299
    },
    {
        name:"clothes",
        price:400
    },
    {
        name:"earBuds",
        price:399
    }
]


const num=order.reduce( (acc,curVal) => acc+curVal.price,0 )
console.log(`Total price of all the orders is ${num}`);