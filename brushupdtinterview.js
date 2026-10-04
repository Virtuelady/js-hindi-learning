// Primitive (call by value in momery)

// 7 types : String, Number , Boolean , null , undefined  , bigInt , Symbol 

//java script is dynamic type

//Non- Primitive(Reference type)(in memory values are allocated)

// Array , Objects, Functions (object and webEvent are important in Js)

const score = 100
const scroreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
const userEmail= undefined;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 123456789098657n

const heros = ["shaktiman,naaraj","daga"];
 let myObj={
    name:" Vamika",
    age: 25,
}

 const myfunction =function(){
    console.log("hello world");

}

  console.log(typeof myfunction);  
