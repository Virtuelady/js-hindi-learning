// Immediately Invoked Function Experssion (IIFE)


(function chai(){
    //named IIFE
    console.log('DB CONNECTED');
})();

( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);

}) ('vamika')