class Bank{
    constructor(bank_name,location,account_no,ifsc,intrest_rate){
        this.bank_name=bank_name,
        this.location=location,
        this.account_no=account_no;
        this.ifsc=ifsc,
        this.intrest_rate=intrest_rate
    }
    
}////create class with constructor

console.log("=======Creation of an objects of bank class==== ");
const axis_bank=new Bank("AXIS Bank","Kholapur","axis000011","axisifsc0001",10.04);
console.log(axis_bank);
const sbi_bank=new Bank("SBI Bank","Pune","sbi112211","sbiifsc0001",10.41);
console.log(sbi_bank);
const icici_bank=new Bank("ICICI Bank","Mumbai","icici112200","iciciifsc0005",11.41);
console.log(icici_bank);
const kotak_bank=new Bank("KOTAK Bank","Radha Nagri","kotak11000","kotakifsc0001",13.41);
console.log(kotak_bank);
const hdfc_bank=new Bank("HDFC Bank","Solapur","hdfc112211","hdfcifsc101",14.41);
console.log(hdfc_bank);
const panjab_bank=new Bank("PANJAB Bank","Satara","panjab22","panjabifsc101",14.41);
console.log(panjab_bank);

//by using set
console.log("==========All object elements added to the set=========");
const setallbank=new Set();
setallbank.add(axis_bank);
console.log(setallbank.add(axis_bank));
setallbank.add(sbi_bank);
console.log(setallbank.add(sbi_bank));
setallbank.add(icici_bank);
console.log(setallbank.add(icici_bank));
setallbank.add(kotak_bank);
console.log(setallbank.add(kotak_bank));
setallbank.add(hdfc_bank);
console.log(setallbank.add(hdfc_bank));
setallbank.add(panjab_bank);
console.log(setallbank.add(panjab_bank));

console.log("==== Traverse this set and display BankName and Location=====");
for (const Bank of setallbank) {
    console.log(`Bank Name: ${Bank.bank_name}, location:${Bank.location}`);
}//display all banks elements

//if you want particular property
/*for (const Bank of setallbank) {
    console.log(Bank.ifsc);
}*/

