//21 March
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


console.log(" 1.===========================");
arr_employee.forEach((Employee)=>{
    let emp_company=Employee.emp_company;
    if(emp_company=="TCS")
    {
        console.log(` Employee Name:=${Employee.emp_name}   Company Name=:${Employee.emp_company}`);
    }
})
console.log("================================================================");
console.log("2.Employee Details with salary >=50000");
arr_employee.forEach((Employee)=>{
    if((Employee.emp_salary )>=50000)
    {
        console.log(Employee);

    }
});

console.log("================================================================");
console.log("3.Sum of all Employee Salary");
let sum=0;
arr_employee.forEach((Employee)=>{
    sum=sum+Employee.emp_salary;
});
console.log(`sum of all Employees salary=${sum}`);

console.log("================================================================");
let avgsum=0;
let Totalavg ;

arr_employee.forEach((Employee)=>{
    avgsum=avgsum+Employee.emp_salary;
    const arrlen=arr_employee.length;
     Totalavg =avgsum/arrlen;
});
console.log(`4. Average salary of Employee is=:${Totalavg}`);

console.log("================================================================");
console.log(" 5. Display Employee details whose dept HR Or IT and salary>=75000");
arr_employee.forEach((Employee)=>{
    if(((Employee.emp_dept="IT") ||(Employee.emp_dept="HR"))&& (Employee.emp_salary>=75000)){
        console.log(Employee);
    }
});
