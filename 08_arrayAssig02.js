const  arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`1. Total number of elements in array is=${arrayNumbers.length}`);
console.log("----------------------------------------------------------");
console.log(`2.1 first element of an array is =${arrayNumbers[0]}`);
console.log(`2.2 last element of an array is =${arrayNumbers[arrayNumbers.length-1]}`);
let lastElement=arrayNumbers.length-3;
console.log(`3. last 3rd element of an array=${arrayNumbers[lastElement]}`);

console.log("----------------------------------------------------------");
console.log("4.Even elements of an array is");
for (let index = 0; index <arrayNumbers.length; index++) {
const element = arrayNumbers[index];
  if(element%2==0)
  
console.log(` ${element} \t`);    

}

console.log("----------------------------------------------------------");
console.log("5.odd elements of an array is");
for (let index = 0; index <arrayNumbers.length; index++) {
const element = arrayNumbers[index];
  if((element%2)!=0)
  console.log(` ${element} \t`);    
}

console.log("----------------------------------------------------------");
console.log("6.Even position of an array is");
var sum=0;
for (let index = 0; index <arrayNumbers.length; index++) {
   if(index%2==0)
  {
    sum=sum+arrayNumbers[index];
  }
  //console.log(`${index} is=${arrayNumbers[index]}  sum=${sum}` ); it display index with value and sum
}
console.log(`Total sum=${sum}`);

console.log("----------------------------------------------------------");
console.log("7.odd position of an array is");
var sum=0;
for (let index = 0; index <arrayNumbers.length; index++) {
    const element=index;
       if((element%2)!=0)
  {
    console.log(`index[${element}]=${arrayNumbers[index]}`);
    sum=sum+arrayNumbers[index];
  }
  //console.log(`${index}`);
  //console.log(`${index} is=${arrayNumbers[index]}  sum=${sum}` ); it display index with value and sum
}
console.log(`Total sum of odd position is=${sum}`);

console.log("----------------------------------------------------------");
console.log("8.sum of all the elements of an array");
var sum=0;
for (let index = 0; index <arrayNumbers.length; index++)
{
    sum=sum+arrayNumbers[index]; 
}
console.log(`sum of all elemnts= ${sum}`);
console.log("----------------------------------------------------------");
console.log("9.Multiple of 5");
for (let index = 0; index < arrayNumbers.length; index++)
{
    const element = arrayNumbers[index];
    if ((element%5)==0) 
    {console.log(`index[${index}]=${arrayNumbers[index]}`);
        
    }
}
console.log("----------------------------------------------------------");
const isavaliable115=arrayNumbers.includes(115);
console.log(`"isavaliable115"=${isavaliable115}`);

console.log("----------------------------------------------------------");
const isavaliable23=arrayNumbers.includes(23);
console.log(`"isavaliable23"=${isavaliable23}`);

console.log("----------------------------------------------------------");
console.log("Before adding arrayNumbers in array is");
console.log(arrayNumbers);
console.log("55,66 adding Numbers before index3  is then array is ");
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);
console.log("----------------------------------------------------------");
const arraryDelete=arrayNumbers.splice(4);
console.log(arrayNumbers);


  