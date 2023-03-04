
//Function Expression (anonmaun Function)or Undefined function?//
var count = 0;
var countVoewl = function (str) {
    var count = 0;
  for (let index = 0; index < str.length - 1; index++) {
    var word = str.charAt(index);
    switch (word) {
      case "A":
      case "a":
        count++;
        break;
      case "e":
      case "E":
        count++;
        break;
      case "i":
      case "I":
        count++;
        break;
      case "u":
      case "U":
        count++;
        break;
      case "o":
      case "O":
        count++;
        break;
      default:
        //console.log("No volwels In the string");
        break;
    } //switch case
  } //for loop
  return ` Given String:"${str}"  \n Total count of vowels: ${count}`;
} // end of function

console.log("********* Q1. Count total Vowels*********");
var TotalResult = countVoewl("JavaScript is the language Of Internet");
console.log(`${TotalResult}`);
var TotalResult=countVoewl(" I am Angular Developer");
console.log(`${TotalResult}`);
var TotalResult=countVoewl("Hard work and commitment is the key of success");
console.log(`${TotalResult}`);


function lastWordcharsCount(str1)
 { var s=str.length-1;
  var s1 =s.trim();
    var lastword=" ";
    for (let index=str1.length-1; index>=0; index--)
    
    {
      var char=str1.charAt(index);
      lastword=lastword+char;
      if(char== " ")
      {
        break;    
      }
    return `lastword.length`;
  }
}
var result=lastWordcharsCount("JavaScript is the language Of Internet");
console.log(`${result}`);
var result=lastWordcharsCount("I am Angular Developer");
console.log(`${result}`);
var result=lastWordcharsCount("Hard work and commitment is the key of success");
console.log(`${result}`);
