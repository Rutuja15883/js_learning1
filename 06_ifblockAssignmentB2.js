function maleMarriageEligiblity(gen,age,bodyName)
{
    if(gen=="Male" && age>=21)
    {
        return `${bodyName} are eligible for marrige`;
    }
    else{
        return `${bodyName} are Not eligible for marrige`;
    }

}
var re= maleMarriageEligiblity("Male",25,"BillGates");
console.log(`Hey  ${re}`);
var re1=maleMarriageEligiblity("Male",17,"Stew Jobs");
console.log(`Hey ${re1}`);