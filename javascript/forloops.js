// console.log("hello we gonna start for loops of different types")

const arr=[1,2,3,4,5]
const obj1=[{
    name:"rudra",
    age:19
},
{
    name:"sujal",
    age:20
}

]

const obj2={
    name:"c++",
    ext:"cpp"
}

const map=new Map();
map.set(1,"C++")
map.set(2,"javaScript")
map.set(3,"Python")

/*for (const item in obj2){
    console.log(`${obj2[item]} yo `);
}*/

obj1.forEach( (item) =>{
    console.log(item);
})