class Bank  {
    //bankname,
    //location,
    //accountNO, 
    //ifsc, 
    //interestRate,
constructor(bankname,location,accountNO ,
    ifsc, 
    interestRate){
        this.bankname=bankname;
        this.location=location;
        this.accountNO=accountNO;
        this.ifsc=ifsc;
        this.interestRate=interestRate;
    }    
    showDetails(){console.log(`Bank:${this.bankname} ${this.location}`);}
}
const sbiBank=new Bank("SBI","pune",1234,"SBI1233",10);
//console.log(sbiBank);
sbiBank.showDetails();

function traverObject(bankObject) {
    for (const key in bankObject) {
        if (Object.hasOwnProperty.call(bankObject, key)) {
            const element = bankObject[key];
            console.log(`key=${key} ${element}`);
            
        }
    }
    
}