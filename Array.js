//Array
const myarr=[1,1,2,3,4,5,"Valini"] //javascript array are resizeable and it can be mix of datatypes.

const myHeros = ["shaktiman","Naaraj","juniorgee"]

const myarr2 = new Array(1,2,3,4)

//console.log(myarr[2]);


//Array methods

// myarr.push(6)
// myarr.push("Vrinda")
// myarr.pop()

myarr.unshift(6)
myarr.shift()


const myArr=[1,1,2,3,4,5,"Valini"]
// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

//console.log(myarr.includes(9));

//console.log(myarr.indexOf(9));

//********slice, splice********

// console.log("A",myArr);

// const myna1 = myArr.slice(1,3)

// console.log(myna1);

// console.log("B", myArr);

// const mya2 = myArr.splice(1,3)
// console.log("C",myArr);
// console.log(mya2);


const MarvalHeroes = ["thor","Ironman","spiderman"]
const dcHeros = ["superman","flash", "batman"]

MarvalHeroes.push(dcHeros)

// console.log(MarvalHeroes);
// console.log(typeof Array);

// const AllHeroes=MarvalHeroes.concat(dcHeros)
// console.log(AllHeroes);

const allnewHeros = [...MarvalHeroes,...dcHeros]

//console.log(allnewHeros);

const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realanotherarray = anotherarray.flat(Infinity)

//console.log(realanotherarray);

console.log(Array.isArray("vrinda"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"vrinda"}))  //interesting array gives empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));