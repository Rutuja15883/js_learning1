//22 march assignt map()
const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.error("============1. Add 10 into each array of elements===========");
const  array10Numbers=arrayNumbers.map( (element)=>{
    return element+10;
});
console.log(array10Numbers);

console.error("============2. Squre of each array of elements===========");
const arrayOFSqure=arrayNumbers.map((element)=>{
return element*element;
});
console.log(arrayOFSqure);

console.error("============3. Add index value into each array of elements===========");
const arrayelementAddwithIndex=arrayNumbers.map((element,index)=>{
return element+index;
});
console.log(arrayelementAddwithIndex);