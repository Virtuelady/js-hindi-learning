const user ={
    username:"Vamika",
    loginCount: 8,
    signedIn:"true",

    getUserDetails: function(){
        //console.log("Got user details from database");
       // console.log(`username:${this.username}`);
       //console.log(this);
    }

}
// console.log(user.getUserDetails());
// console.log(this);

//const promiseOne = new Promise()

function User(username,loginCount,IsLoggedIn){
    this.username = username;
    this.loginCount =loginCount;
    this.IsLoggedIn = IsLoggedIn

    this.greeting =function(){
        console.log(`welcome${this.username}`);
    }
    return this
}
 
const userOne = new User("vamika",12,true)
const userTwo =  new User("ChaiAurCode",11,false)
console.log(userOne.constructor);
