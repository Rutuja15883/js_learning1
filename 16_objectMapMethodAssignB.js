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
 
console.log("Add object of class as elements in to Array");
const  arr_employee=[];
arr_employee.splice(0,0,emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi);
console.log(arr_employee);

console.error("==========1. List of all Employee names into new array========");
const newarrayOFempName=arr_employee.map((element)=>{
    return element.emp_name;
});
console.log(newarrayOFempName);

console.error("========2. List of Departments into new array========");
const newarrayforDept= arr_employee.map((element)=>{
    return element.emp_dept;

});
console.log(newarrayforDept);

console.error("========3. List of Emp id into new array========");
const arrOfempId=arr_employee.map((element)=>{
return element.emp_id;
});
console.log(arrOfempId);

console.error("=======4.list of employee name working in TCS");
let arrcomp=[];
let result=arr_employee.map((Employee)=>{
    //let emp_company=element.emp_company;
    if(Employee.emp_company=="TCS")
    arrcomp.push(Employee.emp_name);
        return arrcomp;
    
});
console.log(arrcomp);
//console.log(arrEmployeeTCS);
//Nayan mam

//let arrcomp=[];
//const arrayTcs=arr_employee.map((Employee)=>{

