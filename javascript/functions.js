function greet(username){
    console.log(`hey ${username} welcome to the app`)
}
//greet("Sujal")
function add(...items){
    return items;
}

console.log(add(2,3,4,5));
function obj(obj1){
    console.log(`hey ${obj1.name} is ${obj1.age} you correct age `)
}
const obj2={
    name:"Rudra",
    age:19
}
obj(obj2);