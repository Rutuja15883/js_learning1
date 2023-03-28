
const arrayRollNumber=[113,45,56,11,32,45,109,799,56,45];
console.error("======Display Arrray============");
console.log(arrayRollNumber);
console.error("========1. Reverse the array========");
const arrReverse=arrayRollNumber.reverse();
console.log(arrReverse);

console.log("  ");
console.error("======= 2. Use sort () without any custom logic ==========");
const sortedArray=arrayRollNumber.sort();
console.log(sortedArray);

console.error("======== 3. sort array by custom logic============"); 
console.log(arrayRollNumber);
arrayRollNumber.sort((a,b)=>{
   return  a>b ? 1: -1 ; 
});
console.log(arrayRollNumber);

console.error("===== 4.Display Greatest number from an array==========");
arrayRollNumber.sort((a,b)=>{
    return a>b ? 1:-1;
});
console.log(arrayRollNumber);
console.log(arrayRollNumber[arrayRollNumber.length-1]);//greatest number

console.error("==== 5. Display smallest number from an array==========");
arrayRollNumber.sort((a,b)=>{
    return a>b ? 1:-1;

});
console.log(arrayRollNumber);
//console.log(" ");
console.log(`Smallest number is=${arrayRollNumber[0]}`);//smallest number

console.error("========== 6 .After sorting an array========");
const uniquearray=[...new Set(arrayRollNumber)];
console.log(uniquearray);