/* console.log(`Start`);
var num=10;
if(num>0)
{
    console.log(`Positive${num}`);
    console.log(`it is if block`);
}
  else
console.log(`-ve number${num}`);*/

console.log("Check enen or odd");
function checkEvenOdd(num)
{
    if(num%2==0)
    return "even";
    else
    return "ODD";
}
var result =checkEvenOdd(45);
console.log(`Given number is  ${result}`);
var result =checkEvenOdd(70);
console.log(`Given number is  ${result}`);
var result =checkEvenOdd(99);
console.log(`Given number is  ${result}`);