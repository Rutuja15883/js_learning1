//rutuja More
/*   key      = value
let firstName="Rutuja";
let lastName="More";
let age=40;
let isWorking=true;
let collegeName="S.M.Joshi college";
let id=369;*/

let student={  //key1+value=property
    firstName :"Rutuja",
    lastName:"More",
    isWorking:true,
    age:40,
    collegeName:"S.M.Joshi college",
    id:369

};
console.log(student);
console.table(student);//intable format
console.log(student.collegeName);//access particular property by using .(dot)property
//.dot notation
console.log(typeof(student.age));//to check particular property of type
console.log(`stu age=${student["age"]}`);

//update the property
console.log(student.collegeName="A.M");
console.table(student);    

//to add new property into student object
student.city="pune";
console.log(student.country="India");
console.table(student);

//to delete proprty fom student object
delete student.isWorking;
console.table(student);


//to create new empty object
let teacher={};
//to add proerty into empty object
teacher.firstName="Mr.Mohit sir";
console.log(teacher);

