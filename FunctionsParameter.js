//Functions and parameters

function sayMyName(){
    console.log("V");
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("K");
    console.log("A");
}

//sayMyName()

// function AddTwoNum(num1,num2){
//     console.log(num1 + num2);
// }


function AddTwoNum(num1,num2){
    //let result = num1 + num2
    
   // console.log("hitesh")

   return num1 + num2

}
const result = AddTwoNum(3,3)
//console.log("Result:",result);

function loginUsermsg(username = "Shaa") {

    //if(username === undefined)
    if(!username){

        //console.log("Please enter a username");
        return

    }
    return `${username} just logged in`
}
//console.log(loginUsermsg("Vamika"));

//console.log(loginUsermsg());


function calcuCartPrice(val1,val2,...num1){  //rest operator in function *spread
  return num1
}
//console.log(calcuCartPrice(200,400,500));

const user ={
    username : "Vamika",
    Price : 999
}

function handleObject(anyobject){
   console.log(`Username is ${anyobject.username} and price is ${anyobject.Price}`)
}
//handleObject(user)
handleObject({
    username: "Shaa",
    Price: 399
})

const myNewArray = [200,400,500,700]

function returnSecondValue(getArray){
  return getArray[4]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,700,500,800]));