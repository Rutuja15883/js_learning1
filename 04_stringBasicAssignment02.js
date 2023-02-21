
var str="     Hey you are doing good, Keep it up       ";
function stringHandsOn()
{
    console.log("***1.String is ***\n",str);
    
    var strlen=str.length;
    console.log("***2.Strlength=***\n",strlen);
    
    var strtrim=str.trim();
    var trimLength=strtrim.length;
    console.log("*** 3.Remove extra space back and forth and display trim string length ***\n ",strtrim,"\n TrimStringLength=",trimLength);

    //console.log("4. Count total number of spaces");
    var countSpaces=str.length-trimLength;
    console.log("**** 4. Count total number of spaces ****\n",countSpaces);

    console.log("*** 5 .First and Last character of string****");
    console.log("First character of the string is==",strtrim.charAt(0));
    var lastChara=strtrim.charAt(trimLength-1);
    console.log("Last character of the string is==",lastChara);

    //console.log("6. count Total number of words");
    var totalWords=strtrim.split(" ");
    console.log("**** 6. count Total number of words ****\n",totalWords);

    console.log("**** 7.Index of the word good****");
    var indexgood=strtrim.indexOf("good");
    console.log("Index of the word good after trim =",indexgood);
    console.log("Index of the word good before trim=",str.indexOf("good"));

    console.log("*** 8 using slice  and Substring method****");
    var slicestring=strtrim.slice(22);
    console.log(" Substring starting from index(22)=",slicestring);

    //console.log(" using subString method");
    var subString=strtrim.slice(22);
    console.log("Substring starting from index(22)=",subString);

    console.log("****9.Check ,string end with up ***");
    console.log("String end with up==",strtrim.includes("up"));

    console.log("****10.Check ,string start with up ***");
    console.log("String start  with up==",strtrim.includes("Hey"));


}
stringHandsOn();
