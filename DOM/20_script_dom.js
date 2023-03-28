console.log("=========API querySelector()to select element by id============");
const h1ElementbyId=document.querySelector("#profile");
console.log(h1ElementbyId);
console.log(h1ElementbyId.innerHTML)

console.log("=========API querySelector()to select element by id to change color============");
h1ElementbyId.style.color="Blue";

const parabyName=document.querySelector("#para");
parabyName.style.fontFamily = "Courier New', Courier, monospace"
parabyName.style.color="Pink";

console.log("=========API querySelectorAll()to select element by id to change color============");
const  listQuery=document.querySelectorAll(".list");
listQuery[1].innerHTML="DATABASE";
listQuery[1].style.fontFamily="cursive";
listQuery[1].style.color="RED";
console.log(listQuery[1]);

console.log("===========Remove elements=========");
const divprojEle=document.querySelector("#divproj");
const hobelement=document.querySelector("#hob");
divprojEle.removeChild(hobelement);
