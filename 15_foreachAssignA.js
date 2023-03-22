//21 march
const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log("1.  Display the array elements with its index using ForEach()with arrow()");
// notation of arrow function     ()=>{}
arrayNumbers.forEach((currentValue,index) =>{
    console.log( `Array of ${[index]} = ${currentValue}`);
});

console.log("============================================");
console.log(" 2. Display the Positive number Using forEach() with arrow function");
arrayNumbers.forEach((currentValue)=>{
if(currentValue>=0)
{
    console.log(`positive No. is=${currentValue}`);
}
});



console.log("============================================");
console.log("4.Display Even numbers  ");
arrayNumbers.forEach( (currentValue)=>{
    if(currentValue%2==0)
    {
        console.log(`Even number is:${currentValue}`);
    }
});

console.log("============================================");
let sum=0;;
arrayNumbers.forEach((currentValue)=>{
    sum=sum+currentValue;
});
console.log(`5. Sum of all array elements are:${sum}`);

console.log("============================================");
console.log("6.Display Even indexed array and its value");
arrayNumbers.forEach((currentValue,index)=>{
    if(index%2==0)
    {
        console.log(`\t Even index:${index} array value is :${currentValue}`);
    }
});

console.log("============================================");
let negativearray=[];
console.log(" 3. -ve numbers");
arrayNumbers.forEach((currentValue)=>{
    if(currentValue<0)
    {
        //const negativearray=[];
        negativearray.splice(0,0,currentValue);   
    
    
    }
    
});console.log( negativearray);




