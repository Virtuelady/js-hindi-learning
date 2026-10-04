const name = "Vrinda"
const repo = 5

//console.log(name + repo + " Value"); // String Interpolation

console.log(`Hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String("Shal-ini-sin-gh")

// console.log(gameName[1]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log (gameName.charAt(4));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)

//console.log(newString);

const anotherString =  gameName.slice(-8,4)
//console.log(anotherString);

const newStringOne= " hitesh  "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https:hitest.com/hitesh%20Singh"

console.log(url.replace('%20', '_'));
console.log(url.includes('singh'));

console.log(gameName.split('-'));
console.log(newStringOne.small());