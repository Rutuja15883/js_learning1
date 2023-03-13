function Bank(BName,location,ifscCode,branchCode)
{
    this.BName=BName,
    this.location=location,
    this.ifscCode=ifscCode,
    this.branchCode=branchCode,
    this.show=function(){
        
        console.log(`Name of Bank is:${this.BName}, Location is :${this.location},IFCS code is:${this.ifscCode},Branch code is:${this.branchCode}`);
    }
}
console.log("=========Bank Details=========");
const yesBank=new Bank("YesBank","Satara","yes123","y1111");
yesBank.show();

const sbiBank=new Bank("State Bank Of India","Pune","sbi3331","sbi2222");
sbiBank.show();

const BOMBank=new Bank("Bank OF Maharashtra","Sangli","BOM123","BOM44444");
BOMBank.show();

const AxisBank=new Bank("AXIS Bank","solapur","axis112233","Axis55555");
AxisBank.show();
console.log("=====================================================");
Bank.prototype.openTime="9 A.M IST";
console.log(`Adding Data Member:${Bank.prototype.openTime}`)
console.log("=====================================================");
Bank.prototype.closeTime="6 P.M IST"
console.log(`Adding Data Member:${Bank.prototype.closeTime}`)
console.log("=====================================================");
console.log(`Open Time of SBI Bankis: ${sbiBank.openTime} and Closed Time is:${sbiBank.closeTime}`);
console.log(`Bank Name is: ${AxisBank.BName} and Closed Time is:${AxisBank.closeTime}`);
console.log("=====================================================");
console.log(`Bank Name is:${yesBank.BName}, Branch Code is: ${yesBank.branchCode}, OpenTimming is:${yesBank.openTime}`);