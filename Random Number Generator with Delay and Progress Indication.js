const prompt = require("prompt-sync")({ sigint: true});
let delay  =  prompt("Enter the delay : ")

console.log("Remaining time is : " + delay + " second" );

function n(){
    delay = delay - 1;
    console.log("Remaining time is : " , delay , " second");  
}

let a = setInterval(n , 1000);






function ne(){
    console.log("Random Number is : ", Math.floor(Math.random()*10));
    clearInterval(a)
}
let millisecond = delay *1000;
setTimeout(ne ,  millisecond)
 



