console.log("================fibonnici series=========");
let n1=0;
let n2=1;
let result=n1+n2;
console.log(n1);
console.log(result);
let limit=10;
for(i=0;i<=limit;i++)
{
    n1=n2;
    n2=result;
    result=n1+n2;
console.log(result);
}
/*
//// 0  1  1   2   3   5   8

function fabSeries(fabTerm){
    let first = 0;
    let second = 1;
    let next = 0;
    for (let index = 1; index <= fabTerm; index++) {
     console.log(first);   
      next = first + second; 
      first = second;
      second = next;  
    }
}
fabSeries(7);
*/
