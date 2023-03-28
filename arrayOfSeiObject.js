//21 march
class Employee {
    constructor(empId,empName,empDept,empSalary,empCompany) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
console.error("~~~~~~~~~~~~~~~~~~~~~~~~~~~ Created All Employee Objects Using Class ~~~~~~~~~~~~~~~~~~~~~~~~~~~");
const empAnil = new Employee (22,"Anil","IT",50000,"TCS");
console.log(empAnil);
const empRadha = new Employee (33,"Radha","HR",74000,"Wipro");
console.log(empRadha);
const empRishi = new Employee (55,"Rishi","Finance",47000,"TCS");
console.log(empRishi);
const empSonali = new Employee (66,"Sonali","Finance",45000,"Infy");
console.log(empSonali);
const empMonika = new Employee (77,"Monika","IT",40000,"wipro");
console.log(empMonika);
const empViny = new Employee (88,"Vinyak","IT",75000,"TCS");
console.log(empViny);
const empMahi = new Employee (99,"Mahesh","HR",85000,"Infy");
console.log(empMahi);


const empset=new set();
empset.add(empAnil);

