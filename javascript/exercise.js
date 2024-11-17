/*console.log("hello");
console.log("my first commit and push on github");*/
const obj1={
    name:"rudra",
    age:19,
    loggedIn:"true",
    prop:{
        isValid:"true",
        location:"pune"
    }
}
const greet=function(){
    console.log('hey its a pleasure to meet '+obj1.name);
}
console.log(greet());
const obj2={1:"a",2:"b"}
const obj3={3:"c",4:"5"}

const obj4={...obj2,...obj3};
console.log(obj4);

console.log(Object.values(obj1.prop));
console.log(obj1.hasOwnProperty("logged"));