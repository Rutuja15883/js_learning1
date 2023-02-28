function voteEligiblity(age) {
  if (age <= 0 || age > 120 || age == undefined || age == null) {
    console.log(`Invalid  age :${age} Enter  proper age`);
    
  } else {
    if (age >= 18) {
      console.log(`Your age is: ${age} is eliglible for voting`);
    } else {
      console.log(`Your age is: ${age} is Not eliglible for voting`);
    }
  }
}
voteEligiblity(45);
voteEligiblity(17);
voteEligiblity(20);
voteEligiblity(8);
voteEligiblity(10);
voteEligiblity(200);
voteEligiblity(0);
voteEligiblity(undefined);
voteEligiblity(null);

console.log("***************************Step 2***********************");
console.log("Claculation of Greades ");
function gradeCalculation(marks) {
  if (marks <= 0 || marks > 100  ||  marks ==null||marks==NaN||typeof marks != "number") {
    console.log(`Enter marks is ${marks}:Please provide valid marks`);
  } else {
    if (marks >= 90) {
      console.log(`Funastic Marks ${marks}: Your grade is A+`);
    } else if (marks >= 75 && marks < 90) {
      console.log(`Excellent marks ${marks}:Your grade is A`);
    } else if (marks >= 50 && marks < 75) {
      console.log(`Good marks ${marks}:Your grade is B`);
    } else if (marks >= 35 && marks < 50) {
      console.log(`Yours Marks ${marks}: Your grade is c Need to imporved`);
    }
  }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);
