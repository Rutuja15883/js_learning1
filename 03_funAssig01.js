// function with no arguments and no return value. 
var num;
var num1;
 
 function showInfo()
 {
    console.log("*****First function with no arguments and no return value.*****");
    console.log("My class name is CODEMIND class");
 }
 showInfo();

 function showPersonal()
 {
    console.log("***** Second function with no arguments and no return value.*****");
    console.log("My  name is Rutuja More");
 }
 showPersonal();

 var firstName='Rutuja';
 var lastName='More';
 var collegeName='A.M.College';
 console.log("-----------2nd-----------");
function personalDetails(value1,value2,value3)
{
    console.log("My firstName=",firstName,"\nMy lastName= ",lastName,"\nMy College Name=",collegeName);
}
personalDetails(firstName,lastName,collegeName);

 console.log("****3. after swap and befor swap****");
 //var str1;
 //var str2;
 
 function swapValuesDude(value1,value2)
 {
   console.log("Before swapping of=",value1,value2);
   var temp=value1;
   value1=value2;
   value2=temp;
   console.log("After swapping of=",value1,value2);
 }
 swapValuesDude("Virat","Anushka");
 swapValuesDude("1000","2000");


 console.log("*** Function with 3 arg and return***");
 function addThreeValues(num1,num2,num3)
 {
    return(num1+num2+num3);
 }
 var total=addThreeValues(10.23,600,40);
 console.log("Total addition=",total);
 var total2=addThreeValues("Hello","Good","Morning");
 console.log("Total String is==",total2);