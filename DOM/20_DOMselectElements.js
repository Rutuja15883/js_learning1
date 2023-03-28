
console.log("=====API get elementsByID to select elements====");
console.log("====== h1 element stored in mainHeading by getElementByID======= ");
const maintainHeading=document.getElementById("name");
console.log(maintainHeading.innerHTML);
//const secondAdvantages;
console.log("====== list of  element stored in secondAdvantages by getElementByClassName======= ");
const secondAdvantages=document.getElementsByClassName("liitem");
console.log(secondAdvantages[1].innerHTML);

const advDiv=document.getElementById("advantages");
console.log(advDiv.innerHTML);
