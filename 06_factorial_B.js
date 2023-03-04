/*var factorialofWordsCount =function(str) 
{
    //let  fact=1;
    if(str==null ||str==undefined||isNaN(str) ||str==" ")
    {
        console.log(`${str} :Enter the valid String` );
    }
    else if((str.length)!==0)
        {let  fact=1;
         //let noOfWords=0;
         var splitstring= str.split(" ");
         var digit=splitstring.length;
        // console.log(digit);
         for (let index = digit; index >=1 ; index--) 
         {
            fact=fact*index;
          }
    }
 return fact;   
}
var result=factorialofWordsCount("Revision is the  mother of success");
console.log(result);*/

/*let noOfWord=0;
var str="Revision is the mother of sucess";
var splitstr= str.split(" ");
var digit=splitstr.length;
//var d=typeof(digit);
console.log(splitstr);
console.log(digit);
var fact=1;
for (let index = digit; index >=1 ; index--) {
    fact=fact*index;
    }
    console.log(fact);*/
//let fact;

var factorialofWordsCount = function (str) {
  let fact = 1;
  if (
    str == undefined ||
    str == null ||
    (isNaN(str) && typeof str == "number")
  ) {
    return `Given String is ${str} :Invalid String`;
  }
  if (str.length == 1) {
    return `Given String: "${str}"\n Factorial of given string  is: ${fact}`;
  } else if (str.length != 0) {
    //let fact=1;

    var splitstr = str.split(" ");
    var digit = splitstr.length;
    for (let index = digit; index >= 1; index--) {
      fact = fact * index;
    }
  }
  return `Given String is:${str} \n factorial is ${fact}`;
};
var factResult = factorialofWordsCount("Revision is the mother of success");
console.log(factResult);
console.log("===============================================================");
var factResult = factorialofWordsCount("Rutuja Ganesh More");
console.log(factResult);
console.log("===============================================================");
var factResult = factorialofWordsCount("We never fail we always learn");
console.log(factResult);
console.log("==============================================================");
var factResult = factorialofWordsCount(undefined);
console.log(factResult);
console.log("==============================================================");
var factResult = factorialofWordsCount(" ");
console.log(factResult);
console.log("===============================================================");
var factResult = factorialofWordsCount(null);
console.log(factResult);
console.log("===============================================================");
var factResult = factorialofWordsCount("K");
console.log(factResult);
console.log("===============================================================");
