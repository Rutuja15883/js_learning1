//Nested Object
let student = {
    firstName:"Kadambari",
    lastName:"More",
    isWorking:false,
    age:10,
    id:369,
    address :{
        city:"Pune",
        Country :"India",
        pinCode :411028
    },// Nested Object
    school: "Sadhana School",
    friends :["Dipa","Nayan","Sarika"],
    show :function () {console.log("I am show function");
                      },
    addressDetails: function()
    {return `Address is:\n city:${this.address.city} country:${this.address.Country} Pincode:${this.address.pinCode}`}
}; 

console.log(typeof(student.id));
console.log(typeof(student.address));
console.log(typeof(student.address.Country)); 
//updateing valige of address of pin
student.address.pinCode=201;
console.log(student.address.pinCode);

student.address.city="satara";
console.log(student.address.city);

//to add  one object as property in  parent student object
student.schoolMarks ={Marathi:78,Maths:79,SocialScience:70,English:67};
console.log(student);

//display maths marks
console.log(student.schoolMarks.Maths);

//display array elements
console.log(student.friends);

//display last element of an array
let last=student.friends[student.friends.length-1];
console.log(last);

//how to call show function
  student.show();


  //call fun addressDetails
let resultAddress=student.addressDetails();
console.log(resultAddress);