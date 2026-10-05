//Dates

let myDate = new Date()
// console.log(myDate.toString()); //mon oct 05 2026 07:10:41 GMT+0000 (Coordinated Univeral Time) 
// console.log(myDate.toDateString());  //mon Oct 05 2026

// console.log(myDate.toJSON());      // 2026-10-05T07:12:49:261Z

// console.log(myDate.toLocaleDateString());    10/5/2026

// console.log( typeof myDate);

//let myCreatedDate = new Date(2026,9,5)

let myCreatedDate = new Date("2026-09-05")

//console.log(myCreatedDate.toLocaleString());


// console.log(myCreatedDate.toDateString());


//*****************Timestaamp****************//

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/100));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toISOString('default,{weekday:"long"}') 