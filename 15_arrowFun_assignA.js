/* Arrow Function Expression with no arguments
let arrow_fun =()=>{
    console.log("Hello");
           }
           arrow_fun();  */

console.log(" 1. Arrow Function Expression with no argument and no return value");           
let arrow=()=>{
    console.log(" \t a.Good Morning Today is Monday");
}
arrow();
console.log("===================================================");
console.log("2. Arrow fun. with 3 args and no return value");
let multiply=(num1,num2,num3=1)=>{
let result =num1*num2*num3;
console.log(` \t a. multiplication of ${num1}*${num2}*${num3}=${result}`);
//console.log(` \t b. multiplication  with default value of ${num1}*${num2}*${num3}=${result}`);
}
multiply(5,5,2);
multiply(10,4);
console.log("===================================================");
console.log("3. With 5 parameters and return value");
let addition =(num1,num2,num3,num4,num5)=>{
    const addresult=num1+num2+num3+num4+num5;
     return addresult;
}
const finaladdresult=addition(100,100,200,349,756);
const finalvalues=addition("Iam","learning","ES6","features","in depth");
console.log(`b Result of  Arrow fun. with 5 args and return value is:= ${finaladdresult}`);
console.log(`b Result of  Arrow fun. with 5 args and return value is:= ${finalvalues}`);


console.log("===================================================");