var dayNumber=1;
var dayNumber=2;
var dayNumber=3;
var dayNumber=4;
var dayNumber=5;
var dayNumber=6;
var dayNumber=7;
function daycheck(dayNumber){
    if(dayNumber<=0 ||dayNumber>7 ||dayNumber==null||isNaN(dayNumber))
if(dayNumber==1){
    console.log("Mon");
}

if(dayNumber==2){
    console.log("Tue");
}
if(dayNumber==3){
    console.log("Wed");
}
if(dayNumber==4){
    console.log("thu");
}
if(dayNumber==5){
    console.log("fri");
}
}
daycheck(1);
daycheck(2);
daycheck(4);
daycheck(6);
daycheck(5);
daycheck(null);
daycheck(undefined);
function weekday(day){
    switch(day){
        case 1:console.log(`${day}:Mon`);
        break;
        case 2:console.log(`${day}:Tue`);
        break;
        case 3:console.log(`${day}:Wed`);
        break;
        case 4:console.log(`${day}:Thu`);
        break;
        case 5:console.log(`${day}:fri`);
        break;
         case 6:console.log(`${day}:sat`);
        break;
        case 7:console.log(`${day}:sunday`);
        break; 
        default:console.log(`${day}: Invalid day`);
        break;
    }
}weekday(3);
weekday(100);
weekday(null);
weekday(-2);
weekday(100);
weekday(undefined);