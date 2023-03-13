let professor = {
    proId:303,
    proName:"Mr.Yadav ",
    proQualification:"Ph.D",
    proCity:"Pune",
    Dept:"Computer Science",
   };
console.log("======= 1.  Display Properties and its value of professor======= ");
console.log(professor);

professor.Degree= {
                     Engineering:"CSC",
                     PhD:"Advanced Computing"
                    };
console.log("======= 2. include nested object degrees ========");
console.log(professor.Degree);

console.log("======= 3.Add  certificate as objectb======" );
professor.certificates=["Hacker Rank Participation","Certificated IFE course","Certified Advanced Programming"];
console.log(professor.certificates);

console.log("=======4.Add function that concat all degrees");
professor.TeacherDegree=function(){
    return `Teacher Degrees are total degrees are ${professor.Degree.Engineering}, ${ professor.Degree.PhD}`;
}
console.log("=======4.Add function that concat all degrees");
//after adding function then it call 
let totalDegree=professor.TeacherDegree();
console.log(totalDegree);

console.log("=======5.  Add new property as Total No of Experiences=========")
professor.no_Of_experiences=12;
console.log(`Total No of Experiences=${professor.no_Of_experiences}`);

console.log("=======6. Modify existing property===========");
professor.proCity="Mumbai";
console.log(professor);

console.log("=======7. Delete one value from certificate=======");  
// delete 1  value from  nested object is certificate ,certificate is array object 
professor.certificates.splice(1,1);
console.log(professor.certificates);

console.log("=======8. and 9. Add new value in certificate=========");
professor.certificates.push("Linux WorkShop");
console.log(professor.certificates);  
