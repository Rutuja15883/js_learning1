
//ES6 features     20 March
'use strict'
//myName="Virat";//  Not Allowed
let myName="Virat";
console.log(myName);

 const person={//not allowed without defining let,var,const
    firstName:"Virat",
    lastName:"Kohali",
    age:33,


}
const student={
    rollNo:34,
    sge:17,
    city:"Pune"
}
console.log(student);
 delete student.age;


 /* gajanan sir
 'use strict'
//myName = "Virat"; // Not allowed
let myName = "Virat";
console.log(myName);
// delete myName; //  Not allowed

//  person = {  // Not allowed to define an object without var, let and const
//     firstName: "Virat",
//     lastName: "Kohli",
//     age : 33
// }

const student = {
    rollNo: 34,
    age: 17,
    city: "PUNE"
}
student = null;
// delete student; // Not allowed in strict mode*/


function show(arg1, ...arg2)
{
    console.log(arg1);
    console.log(arg2);
}
show(100,200,300);