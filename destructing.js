//we extractiong object value
let student={
    fullName:"Rutu",
    isworking:true,
    age:32,
    collegeName:"S.M.Joshi",
    id:123456789
}

/*let student = {
    firstName: "Prashant",
    lastName: "Deshmukh",
    isWorking: true,
    age: 22,
    collegeName: "ABC",
    id: 123456
}*/
// 
// let firstName = student.firstName; //extractiong  object value
// let isWorking = student.isWorking;
// let age = student.age;
// let collegeName = student.collegeName;

let { firstName, isWorking, age, collegeName, id,city="punr"} = student; // Object Destructuring
console.log(`Extracted values from object is: isWorking ${isWorking}  age ${age}  collegeName ${collegeName}  city ${city}`);
//city is not  present in the object 
//we can add city with the help of object restructuring with default


//array destructing
const array=[5,6,7,8];
let [num1,num2,num3,num4,num5,num6=78]=array;
console.log(num1,num2,num3,num4,num5,num6);
//o/p of ,num4,num5 are undefined
//arrray destructing with default value
