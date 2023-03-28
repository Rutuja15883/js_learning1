//22 March
//Example of how to  write ()=>{} (arrow Function) as cllback function using for Each loop.'

const mapOfNumbers=new Map();
mapOfNumbers.set("One",1);
mapOfNumbers.set("TWO",2);
mapOfNumbers.set("Three",3);
mapOfNumbers.set("One",11);
mapOfNumbers.set("five",5);
mapOfNumbers.set("six",6);


console.log("To  Map display all keys with value");
//mapOfNumbers.forEach(   ()=>{  });//syntax of arrow function as an arg. passing to For ...Each method
mapOfNumbers.forEach( (key,value) =>{
    console.log(key,value);
});

//22 march
// use Map on Object
//key == empId and value as an classObject
class Employee{
    constructor( emp_id,emp_name,emp_dept,emp_salary,emp_company){
                this.emp_id=emp_id,
                this.emp_name=emp_name,
                this.emp_dept=emp_dept,
                this.emp_salary=emp_salary,
                this.emp_company=emp_company
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy"); 

const arrayOfObject=new Map();
arrayOfObject.set(22,emp_anil);
arrayOfObject.set(33,emp_radha);
arrayOfObject.set(55,emp_rishi);
arrayOfObject.set(66,emp_sonali);
arrayOfObject.set(77,emp_monika);
arrayOfObject.set(88,emp_viny);
arrayOfObject.set(99,emp_mahi);
console.error("=================== using For Each loop we  traverse map Object =====================");
arrayOfObject.forEach(( key,value )=>{
    //console.log(key,value);
    console.log(`${key.emp_id}===>   Name :${key.emp_name}, Dept:${key.emp_dept}, Company:${key.emp_company}, Salary:${key.emp_salary}`);
} );

