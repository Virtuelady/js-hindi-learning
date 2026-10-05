//Objects
//singleton
//constructor se bnanega to hmesha singleton banega
//normal  object literals se banega
//Object.create //constructor

const mysym = Symbol("key1")

const JsUser = {
    name: "Vrinda",
    "full name":"Vrinda singh",
    age: 25,
    [mysym]:"mykey1",
    location:"balrampur",
    email:"Vrinda@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
//console.log(JsUser[mysym]);

JsUser.city = "Surat"
//Object.freeze(JsUser)
JsUser.city= "Jaipur"

//console.log(JsUser);

JsUser.greeting = function()

{
    console.log("hello Js User");
}

console.log(JsUser.greeting());

JsUser.greeting2 = function(){

    console.log(`hello Js User,${this.name}`);
}

console.log(JsUser.greeting2());
