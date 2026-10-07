//Control flow in JavaScript  or logic control

// const isUserLoggedIn = true
// const temperature = 48
// if(temperature===40){
//     console.log("less than 50");

// }
// else {
//     console.log("temperature is Greater than 50");
// }
// console.log("Execute");

//<,>,<=,>=,== ,!=, ===, !== comparison operator


// const score =200
// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
//  console.log(`User power: ${power}`);

const balance = 1000
//if(balance>500) console.log("test");   //implicit scope


// if(balance>500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// } else if(balance <900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}
if (loggedInfromGoogle || loggedInfromEmail){
    console.log("user logged In");
}
 