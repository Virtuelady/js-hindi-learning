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

        console.log("Please enter a username");
        return

    }
    return `${username} just logged in`
}
//console.log(loginUsermsg("Vamika"));

console.log(loginUsermsg());