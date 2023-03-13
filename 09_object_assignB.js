
const sbiBank = {
    location :"Pune",
    accountNO :123,
    ifsc :"sbi1111",
    interestRate:10 ,
    showDetails:function(){
        return`*****SBI Bank Details****\n ${this.location},${this.accountNO},${this.ifsc},${this.interestRate}`;
    }
};
const axisBank = {
    location :"satara",
    accountNO :111,
    ifsc :"axis0001",
    interestRate:8 ,
    showDetails:function(){
        return`*****AXIS Bank Details****\n ${this.location},${this.accountNO},${this.ifsc},${this.interestRate}`;
    }
};
const hdfcBank = {
    location :"Kolhapur",
    accountNO :5555,
    ifsc :"hdfc333",
    interestRate:7 ,
    showDetails:function(){
        return`*****HDFC Bank Details****\n ${this.location},${this.accountNO},${this.ifsc},${this.interestRate}`;
    }
};
const yesiBank = {
    location :"satara",
    accountNO :444,
    ifsc :"Ybank222",
    interestRate:11 ,
    showDetails:function(){
        return`*****YES Bank Details****\n ${this.location},${this.accountNO},${this.ifsc},${this.interestRate}`;
    }
};

let sbiResult=sbiBank.showDetails();
console.log(sbiResult);
let axisResult=axisBank.showDetails();
console.log(axisResult);
let hdfcResult=hdfcBank.showDetails();
console.log(hdfcResult);
let yesResult=yesiBank.showDetails();
console.log(yesResult);