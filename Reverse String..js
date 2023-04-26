const prompt = require("prompt-sync")({ sigint: true});
let input = prompt("Enter any string which you want to reverse : ") ;
let output = "";

let str = (input) =>{
    for(let i = input.length - 1; i>=0; i--){
        output += input[i];
    }
    console.log("Reversed String is : " , output);
}

setTimeout(str , 2000 , input)
