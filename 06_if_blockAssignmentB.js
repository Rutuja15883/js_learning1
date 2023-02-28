
console.log("*****Given number is Even or odd*****");
function checkEvenOdd(num)
{if (num%2==0)
    {
 return " Even num";}
 if (num%2!==0)
   { return "Odd num";
   }
}
var result=checkEvenOdd(45);
console.log(`Given number 45 is ${result}`);
var result=checkEvenOdd(70);
console.log(`Given number 70 is ${result}`);
var result=checkEvenOdd(67);
console.log(`Given number 67 is ${result}`);
var result=checkEvenOdd(98);
console.log(`Given number 98 is ${result}`);

console.log("*****Check Person is Eligible for vote*****");
function voteFor(age)
{
    if (age>=18)
    {
        return "You are eligible for voting";
    }
    if (age>=18)
    {
        return "You are eligible for voting";
    }
    if (age!=18)
    {
        return "You are  Not eligible for voting";
    }
    if (age>=18)
    {
        return "You are eligible for voting";
    }
}
    var ageResult=voteFor(18);
    console.log(`Age 18 is:${ageResult}`);
    var ageResult=voteFor(20);
    console.log(`Age 20 is:${ageResult}`);
    var ageResult=voteFor(17);
    console.log(`Age 17 is:${ageResult}`);
    var ageResult=voteFor(40);
    console.log(`Age 40 is:${ageResult}`);

    console.log("*****String contain more than 10 char*****");
    function stringJavaScript(str)
          {
            var strlen=str.length;
            
            if(strlen >10)
            {return "JavaScript-Es6 contain Greater than 10 chara."}
        
    }
    var lenResult=stringJavaScript("JavaScript-Es6");
    console.log( `The Given String:${lenResult}`);

console.log("*****Check string start with Java*****");
function funstart(str2)
{
    console.log(str2.startsWith("Java"));

     if(str2.startsWith("Java"))
    {return " string start with java"}

}
   var funResult=funstart("Javascript Language");
    console.log(` Given String"JavaScript Language" start with java`);
