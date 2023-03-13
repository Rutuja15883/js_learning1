function Person(fullName,city) {//function constructor
    this.fullName=fullName;
    this.city=city;
    this.show=function(){
        console.log(`${this.fullName} ${this.city}`);
    }
}
Person.prototype.country="India";


const MORE =new Person("Kadambari","Satara");
MORE.show();//this is the way to call function

const aadi =new Person("Aadi","Pune");
aadi.show();//this is the way to call functio
 console.log(aadi.country);
const ganesh =new Person("Ganesh","Satara");
ganesh.show();//this is the way to call functio

const date=new Date();//built in Object
console.log(date);
console.log(typeof(date));
console.log(date.getDate());

const result=Math.pow(2,4);
console.log(`result=${result}`);


