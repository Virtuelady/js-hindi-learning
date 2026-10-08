// for of 
//["","",""]
//[{},{},{}]

const arry =[1,2,3,4,5]

for (const num of arry) {

    //console.log(num);
    
}


const greetings ="hello world"
for(const greet of greetings){

    //console.log(`Each char is ${greet}`);
}
//Maps

// const map = new Map()
// map.set('In',"India")
// map.set('USA',"United States of America")
// map.set('fr',"France")
// map.set('In',"India")

//console.log(map);

for (const [key,value] of map){     //Destructure of Array
    //console.log(key,':-',value);
}

// const myobject = {
//     'game':'NFS',
//     'game2':'Spider'
// }
// for(const [key,value] of myobject){  //object is not iteratable
//     console.log(key,':-',value);
// }

const myObject = {
    js: "JavaScript",
    cpp: "c++",
    css:"cas",
    rb: "ruby"
}
for(const key in myObject){
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const newArray = ["js","java","cpp","css","py","rb"]   //for in loop only keys as output
for(const key in newArray){
    //console.log(newArray[key]);
}


// const map = new Map()
// map.set('In',"India")
// map.set('USA',"United States of America")
// map.set('fr',"France")
// map.set('In',"India")
// for (const key in map){
//     console.log(key);
// }

// object = for in loop****************
// array = for of loop*******************

