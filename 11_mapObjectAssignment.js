class Bank{
    constructor(bankName,location,accountNo,ifsc,interestRate){
        this.bankName=bankName,
        this.location=location,
        this.accountNo=accountNo,
        this.ifsc=ifsc,
        this.interestRate=interestRate

    }
}//create class with constructor

console.log("=======Creation of an objects of bank class==== ");
const axis_bank=new Bank("AXIS Bank","Kholapur",111,"axisifsc0001",10.04);
console.log(axis_bank);
const sbi_bank=new Bank("SBI Bank","Pune",12211,10001,10.41);
console.log(sbi_bank);
const icici_bank=new Bank("ICICI Bank","Mumbai",112200,"iciciifsc0005",11.41);
console.log(icici_bank);
const kotak_bank=new Bank("KOTAK Bank","Radha Nagri",11000,"kotakifsc0001",13.41);
console.log(kotak_bank);
const hdfc_bank=new Bank("HDFC Bank","Solapur",112211,"hdfcifsc101",14.41);
console.log(hdfc_bank);
const panjab_bank=new Bank("PANJAB Bank","Satara",22,"panjabifsc101",14.41);
console.log(panjab_bank);

//by using Map
const setMapBank=new Map();
setMapBank.set(12211,axis_bank);
setMapBank.set(112200,icici_bank);
setMapBank.set(112211,hdfc_bank);
setMapBank.set(22,panjab_bank);
setMapBank.set(11000,kotak_bank);

console.log("===========using key value we access object========");
console.log(setMapBank.get(12211));
console.log(setMapBank.get(112200));
console.log(setMapBank.get(11000));

console.log(setMapBank.get(112211));
console.log(setMapBank.get(22));
console.log("==============Traverse the Map and log Bank Name,a/c No,inter_rate=======");
const keysOFMap=setMapBank.keys();
for (const key of keysOFMap) 
{
    const element=setMapBank.get(key);
    console.log(`Bank Name:${element.bankName},  Bank accountNO:${element.accountNo},  Interest rate:"${element.interestRate}`);

}
