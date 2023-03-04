
console.log("*******calculate factorial of a Given number******** ");


let fact;
var factorialOfNum=function(number) {
    if (number==null|| number==undefined ||number==0||isNaN(number)){
        console.log(`${number}:  Invalid iput`);
    }
    else if(number==1){
        fact=1;
        //console.log(`Factorial of 1 is${fact}` );
    }
    else if (number>1){
   fact=1;
    for (let index = number; index>=1 ; index--) {
    fact=fact*index;
        
    }return `${number} \n  Factorial is:=${fact}`;
}
}

var factResult=factorialOfNum(5);
console.log(`Given number is:=${factResult}`);
console.log(`==================================================`);
var factResult=factorialOfNum(3);
console.log(`Given number is:=${factResult}`);
console.log(`==================================================`);

var factResult=factorialOfNum(8);
console.log(`Given number is:=${factResult}`);
console.log(`==================================================`);
var factResult=factorialOfNum(null);
console.log(`Given number is:=${factResult}`);
console.log(`==================================================`);
var factResult=factorialOfNum(NaN);
console.log(`Given number is:=${factResult}`);
console.log(`==================================================`);
var factResult=factorialOfNum(undefined);
console.log(`Given number is:=${factResult}`);
console.log(`==================================================`);
var factResult=factorialOfNum(0);
console.log(`Given number is:=${factResult}`);
console.log(`==================================================`);
//var factResult=factorialOfNum(1);
//console.log(`Given number is:=${factResult}`);
//console.log(`==================================================`);