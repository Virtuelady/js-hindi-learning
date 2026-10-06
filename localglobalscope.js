//Local and scope

//let c = 300 //global scope
// let a= 10
// const b = 20
// var c= 30  //it does not work in block codes {}

let a = 300
if(true){
    let a= 10   //local scope
const b = 20
console.log("INNER:",a);

}

// for(let i =0; i<Array.length;i++){

//     const element = array[i];
// }



//console.log(a),
//console.log(b);
console.log(a);