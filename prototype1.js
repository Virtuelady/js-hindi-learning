let myname = "Vamika"
let mychannel = "learning   "
//console.log(myname.trueLength);
//console.log(mychannel.trim().length); lame method plearse avoid this

let myHeros = ["thor","spiderman"]
let heroPower = {
    thod : "ghamer",
    spider : "sling",

    getspiderPower:function(){
       // console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Vamika = function(){
    //console.log(`Vamika is present in all objects`);
}

 Array.prototype.heyVamika = function(){
    //console.log(`Vamika says hello`);
 }
 myHeros.heyVamika()
heroPower.Vamika()
myHeros.Vamika()

//Inheritence

const user = {
    name: "Shaa",
    email: " Shaa.google.com"
}

const Teacher = {
    makevideo : true
}
const TeachingSupport = {
    isAvaiable : false
}
const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,

    __proto__:TeachingSupport
}
Teacher.__proto__= user

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)
 
let anotherUserName = "VamikaSingh     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
   // console.log(`${this.name}`);
    console.log(`True lenth is: ${this.trim().length}`);

}
anotherUserName.trueLength()
"Vamika".trueLength()
"iceTea".trueLength()