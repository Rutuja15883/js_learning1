class Person {
    fullName
    city
    constructor(fullName,city){
        this.fullName=fullName;
        this.city=city;
    }
}
const PersonMORE =new Person("Kadambari","Satara");
const PersonAadi =new Person("Aadiraj","Punr");
console.log(typeof(PersonMORE));

console.log(PersonMORE instanceof Person);
console.log(PersonAadi instanceof Person);
//console.log( instanceof Person);