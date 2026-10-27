const promiseOne = new Promise(function(resolve,reject) {

    //Do an async task
    //DB calls,crytography, network
    setTimeout(function() {
      console.log('async task is complete');  
      resolve()
    }, 1000);
     
})
promiseOne.then(function(){
    console.log("Promise consumed");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
    console.log("Async task two");
    resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"chai@explme.com"})
    },1000)
})
promiseThree.then(function(user){
  console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function(){
    let erroe = true
    if(!error){
        resolve({username:"Vamika",password:"1234"})
    }else{
        reject('ERROR: Something went wrong')
    }
  },1000)
})
 const username=promiseFour.then( (user)=>{
  console.log(user);
  return user.username
})
console.log(username);