//file 10_objectAssignB.js

const banksbi={  //create the object
    branchCode:101,
    noOfEmployee:30,
    ifscNo:"sbi00001",
    MICRCode:"aaaaaa",

}
const bankLocation ={
    street:"pune_solapur road",
    city: "pune",
    country:"India"
}
console.log("======================Banksbi Object created===========");
console.log(`Bank Code is:${banksbi.branchCode},No OfEmployee is:${banksbi.noOfEmployee},IfSC Code:${banksbi.ifsc},MICRCode is:${banksbi.MICRCode}`);
console.log("======================Bank Location Object created===========");
console.log(`Bank Street:${bankLocation.street}, Bank city :${bankLocation.city},Bank country:${bankLocation.country}`);
console.log("================== Clone by using Object.assign() =====================");
const clone_banksbi=Object.assign({}, banksbi);
console.table(clone_banksbi);

const bankLocation_clone=Object.assign({},bankLocation);
console.table(bankLocation_clone);
console.log("==================By using Spread Operator clone banksbi=====================");
const newdeepbanksbi={...banksbi};// Deep cloning with spread operator
//console.log(newdeepbanksbi);
console.log(`Bank Code is:${newdeepbanksbi.branchCode},No OfEmployee is:${newdeepbanksbi.noOfEmployee},IfSC Code:${newdeepbanksbi.ifsc},MICRCode is:${newdeepbanksbi.MICRCode}`);

console.log("===================By using Spread Operator clone bankLocation=====================");
const newclonebanklocation={...bankLocation};
console.log(`Bank Street:${newclonebanklocation.street}, ${newclonebanklocation.city},${newclonebanklocation.country}`);

console.log("====================ratrOfInterest object created============");
const ratrOfInterest={
    homeLoanIntrest:"up to 10 lakh",
    personalInterest:"up to 5 lakh",
    dueInterest:"10 %",

}
console.table(ratrOfInterest);

console.log("============Merge 3 the object==========");
const sbiDetails=Object.assign({},banksbi,bankLocation,ratrOfInterest);
console.table(sbiDetails);
console.log("============Traverse the merge Object==============");
console.log(`Branch Code:${sbiDetails.branchCode},\n NoOfEmployee:${sbiDetails.noOfEmployee},\n IFSC Code:${sbiDetails.ifsc},\n MICR code:${sbiDetails.MICRCode},\n Street:${sbiDetails.street},\n city:${sbiDetails.city},\n country:${sbiDetails.country},\n HomeLoanIntrest:${sbiDetails.homeLoanIntrest},\n PersonalIntrest:${sbiDetails.personalInterest},\n DueIntrest:${sbiDetails.dueInterest}`);
