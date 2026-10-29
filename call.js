function SetUsername(username){
  this.username = username
  //complex DB calls
  console.log("called");
}

function createUser(username, email,password){

    SetUsername.call(this,username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@facboo","123")
console.log(chai);