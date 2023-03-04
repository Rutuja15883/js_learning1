/* function expression is
var variable name= function(arguments){

}
variable name(arguments);
*/



function display(args){
console.log (args*args);
}
display(30);
//console.log(re);


var show=function(args){
    console.log('Hi Good Morning');
}
show();
console.log(show);
console.log(typeof show);

console.log("*****FE- functiom Expression*****");
 var sum=function(arg1, arg2){
    console.log(arg1+arg2);
    return arg1*arg2;
}
var result=sum(10,19);
console.log(`result==${result}`);



/* function expression is
var variable name= function(arguments){

}
variable name(arguments);
*/