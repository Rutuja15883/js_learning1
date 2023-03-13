const employee= {
    empId :1234567,
    ename :"Rutuja More",
    ecountry :"Canda",
};
//way to traves the object by using for..in
for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key,element);
        
    }
}
 console.log("************* in operator **************");
const isAvaliable =  "empId" in employee;
console.log(isAvaliable);
//to get all keys  Syntax:-Object.keys(objectname)
const keysOfEmployee=Object.keys(employee);
console.log(keysOfEmployee);

//to get all values of object  Syntax:-Object.values(objectname)
console.log(Object.values(employee));
//another way
const valuesOfEmployee=Object.values(employee);
console.log(valuesOfEmployee);

const entry=Object.entries(employee);
console.log(entry);
