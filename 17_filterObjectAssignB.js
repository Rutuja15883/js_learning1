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

console.log(" 1. All Employee from TCS and log company name and Employee name");
let  tscarr=[];
 arr_employee.filter((Employee)=>{
if(Employee.emp_company=="TCS")
{
    console.log(`Company Name:${Employee.emp_company} Employee Name:${Employee.emp_name}`);
    console.log("Display into arrray===");  
    tscarr.splice(0,0,Employee.emp_company,Employee.emp_name);
    console.log(tscarr);

}
});

console.log("=====  2. Average salary of Employee from company Wipro=======");
var avg=0;
let total=0;
 arr_employee.filter((Employee)=>{
    if(Employee.emp_company=="Wipro")
    { 
    total =(total+Employee.emp_salary);
        avg=total/2;
}
});console.log(avg);

total=0;
avg=0;
console.log("===============  3.Display  avg salary whose working in Wipro or Infosys ==========");
arr_employee.filter((Employee)=>{
    if(Employee.emp_company=="Wipro" || Employee.emp_company=="Infy")
    {   
        total=(total+Employee.emp_salary);
        avg=total/4;
        
    }
});console.log(`avg salary whose woking in Wipro orInfosys:=${avg}`);

//
 arr_employee.filter((Employee,index)=>{
    if(Employee.emp_company=="Wipro" && Employee.emp_company=="Infy"){
     console.log( Employee.emp_name)  }
});
//console.log(arrename);