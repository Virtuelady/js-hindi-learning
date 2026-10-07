//eval execution context
//memory execution context 
//global execution context
//function execution context

let val1=10   //global execution(this)
let val2 =5
function addNum(num1,num2){     //memory creation Phase  val1 = undefined val2 = undefined
let total = num1 + num2         //addnum = definition
return total
}

let result1 =addNum(val1,val2)   //result1 = undefined

let result2 = addNum(10,2)       //result2 = undefined

//Execution Phase val1 =10, val2 =5
//addnum = new variable environment + Execution thread = memory phase val1-undefined ,val2-undefined


//call stack

function one(){
    console.log(one);
}
function two(){
    console.log(two);
}
function three(){
    console.log(three);
}
one()
two()
three()