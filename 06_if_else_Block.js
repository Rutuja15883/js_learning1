function maleMarriageEligiblity(gender, age, boyName)
 {
  if(gender ="Male" && age <0 ) {
    return `Hey ${boyName}  age ${age} is not valid`;
  }
  if (age==undefined){
    return ` Hey ${boyName}  age ${age} is not valid`;

  }
    if ((gender = "Male" && age >= 21)) {
    var str = `Hey ${boyName} you are eligible for marriage`;
    return str;
  } else {
    var str = `Hey ${boyName} you are not eligible for marriage`;
  }
}
var re = maleMarriageEligiblity("Male", 25, "Billgates");
console.log(re);
var re = maleMarriageEligiblity("Male", -30, "Shivm");
console.log(re);
var re = maleMarriageEligiblity("Male", undefined, "RAju");
console.log(re);