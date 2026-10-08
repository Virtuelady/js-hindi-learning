//For loop with break and continue  =>iterations
for(let i =0 ; i <= 10; i++){
    const element =i;

    if(element == 5){
        //console.log("5 is best Number");
    }
    //console.log(element);
}

for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop value: ${i}`);
   for(let j = 1; j < 10; j++){
    //console.log(`inner values: ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + '=' + i*j);

   }
    
}

let myArray = ["flash","hulk","batman"]
  //console.log(myArray.length);
for (let index = 0; index < myArray.length; index++){
    const element = myArray[index];
    //console.log(element);
}

//break and Continue

// for(let index = 1; index <=20 ; index++){
//     if(index == 5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
// }


for(let index = 1; index <=20 ; index++){
    if(index == 5){
        //console.log(`Detected 5`);
        continue
    }
   // console.log(`value of i is ${index}`);
}

//while and do-while
// let index =0

// while(index <=10){
//     console.log(`Value of index is ${index}`);
//     index = index + 5
    
// }

let myHeros = ["batman","hulk","superman"]
let arr =0
while(arr<myHeros.length){
   // console.log(`Value is ${myHeros[arr]}`);
    arr = arr +1
}


//do-while loop
let score =11
do{
   console.log(`score is ${score}`)
   score ++
}while(score <=10);