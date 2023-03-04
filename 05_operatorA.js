var word;
function squareOFWorldLength(word)
{console.log(`The string is ${word}`);
var wordLen=word.length;
console.log(`The Length of the ${word}==${wordLen}`);
var result=wordLen*wordLen;
return result;
}

var squreResult =squareOFWorldLength("JavaScript");
console.log(`squre of wordlength=${squreResult}`);
console.log(`******************`);
var googleResult=squareOFWorldLength(" Google Chrome");
console.log(`squre of wordlength=${googleResult}`);
console.log(`******************`);
var developerResult=squareOFWorldLength("Developer Smart");
console.log(`squre of wordlength=${developerResult}`);
console.log(`******************`);

console.log(`***** step 2   *****`);
function stringDeveloper()
{
    var str="I am Angular Developer";
    console.log(`${str}`);

    var strl=str.length;
    console.log(strl);
    var strsplit=str.split(" ");
    console.log(strsplit);
     var total= strl*strsplit;

     console.log("total",total);
    var sresult=strl/strsplit;
    console.log(`${sresult}`);

}
stringDeveloper();


