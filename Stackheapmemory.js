//Stack(primitive) copy
//  and heap (non-primitive)memory reference


let myname ="Vamika"

let anotherName = myname

anotherName = " Shalini"

// console.log(anotherName);
// console.log(myname);

let userOne={
    email: "Vamika@gmail.com",
    upi:"Paytm@ypl",
}

let usertwo=userOne
    usertwo.email="Shalini@gmail.com"

    console.log(userOne.email);
    console.log(usertwo.email);
