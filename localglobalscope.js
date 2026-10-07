//Local and scope

//let c = 300 //global scope
// let a= 10
// const b = 20
// var c= 30  //it does not work in block codes {}

let a = 300
if(true){
    let a= 10   //local scope
const b = 20
//console.log("INNER:",a);

}

// for(let i =0; i<Array.length;i++){

//     const element = array[i];
// }



//console.log(a),
//console.log(b);
//console.log(a);


//Nested Scope

function one(){
   const username = "Vamika"

    function two(){
       const website ="youtube"
        console.log(username);
    }
   // console.log(website);
    two()
}
//one()

if(true){
    username= "Vamika"
    if(username === "Vamika"){
        const website =" youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//******************* Interesting****************//
console.log(addobe(5));
function addobe(num){
    return num + 1
}


addtwo(5)
const addtwo = function(num){   //experssions
    return num + 2
}
