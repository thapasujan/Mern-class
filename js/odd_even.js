// odd even program

const a = 5;
const b = 10;

function isOddEven(num){
    if(num % 2 === 0){
        return "Even";
        
    }else{
        return "Odd";
    }
}

var result = isOddEven(a); // "Odd"
var results = isOddEven(b); // "Even"

console.log(`The number ${a} is ${result}.`);
console.log(`The number ${b} is ${results}.`);