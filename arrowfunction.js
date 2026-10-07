//This and Arrow function
const user = {
    username : "Vamika",
    price : 999,

    welcomeMessage : function(){
        // console.log(`${this.username},welcome to website`);  //this refers current context
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function one(){
//     let username = "Vamika"
//     console.log(this.username);
// }
// one()

// const chai = function(){
//     let username = "Vamika"    //undefined output
//     console.log(this.username);
// }

const chai = () => {
    let username = "Vamika"
    //console.log(this);             //empty parenthesis
}
//chai()

// const addtwo=(num1,num2) => {    //explicit 
//     return num1 + num2
// }

//const addtwo=(num1,num2) =>  num1 + num2    //implicit
//const addtwo =(num1, num2) => ( num1+ num2)    //using parenthesis no need to write return keyword

const addtwo =(num1, num2) => ({username: "Vamika"})
console.log(addtwo(3,4));

// const myArray =[1,2,3,4]
// myArray.forEach()