const arrayNumber=[20,3,4,56,90,400,49];
console.log(" =====shallow clone on arrayNumber=====")
const shallowclonearray=arrayNumber;
console.log(shallowclonearray);
console.log("===== update array with 55,66 by push()=====");
shallowclonearray.push(55);
console.log(shallowclonearray);
shallowclonearray.push(66);
console.log(shallowclonearray);
console.log("==========Original Array and Cloned array============");
console.log(arrayNumber);
console.log(shallowclonearray);// in shallow clone both the array display same value


const deepClonearray=[...arrayNumber];
console.log("======Deep clone on array=====");
console.log(deepClonearray);
console.log("===== update original array (ie arrayNums) with 10,25 by push() =====");
arrayNumber.push(10);
arrayNumber.push(25);
console.log("================print both original array and deepClone array============");
console.log(arrayNumber);
console.log(deepClonearray);

arrayEven=[2,30,14,8];
console.log("=======Merge arrayNumber and arrayEven with spread Operator============");
const concatarrayResult=[...arrayEven,...arrayNumber];
console.log(concatarrayResult);

const employee_info={
    emp_id:27,
    emp_name:"Jhon Doe",
    salary:{
        july_month :"40,0000INR",
        aug_month :"50,000INR",
        jun_month:"65,000INR",
    },
    address:{
        locality:{
            colony:"Om Virndavan Society",
            street:"Kanch Pokli,431202",
                },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88","1800-4567 32","+91- 9096 5678 77"]
}//creation of an object

console.log(employee_info);
console.log("=========Show Employee Details (Address and Mobiles)=======");
console.log(`Address:${employee_info.address.locality.colony}, ${employee_info.address.locality.street}`);
console.log(`\t${employee_info.address.city}, ${employee_info.address.state}, ${employee_info.address.country},`);
console.log(employee_info.mobiles);
console.log("========deep cloning with JSON stringfy()==========");

const newEmployee=JSON.parse(JSON.stringify(employee_info));

newEmployee.salary.july_month="80K";
console.log(`Updated cloned Object of july_month:${ newEmployee.salary.july_month}`);
newEmployee.address.country="United Kingdom";

console.log(`Updated cloned Object of country:${newEmployee.address.country}`);

