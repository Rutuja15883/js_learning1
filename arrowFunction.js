let show=()=>{//no arguments ,no return value
    console.log("Arrow function");
}

show();//to call =>


//arrow function with argy=ument but no return value
 let add=(num1,num2)=>{

    console.log(num1+num2);
}
add(10,140);

//arrow function with argy=ument but  return value
let mul=(num1,num2)=>{
    const result= num1*num2;
    return result;
}
const resultmul=mul(10,3);
console.log(resultmul);

//we can also write in one line
let multiply = (num1, num2) => {
    const result = num1 * num2;
    return result;
}
const multiplyResult = multiply(40, 5);
console.log(multiplyResult);


let multiplyRes = (num1, num2) =>  num1 * num2;
console.log(multiplyRes(30, 5));