//22 march
/* its my

const isAvalible=true;
let promiseForNotes= new Promise(function(resolve,Rejected){
if(isAvalible){
    resolve("Sir shared Notes....");
}
else{
    Rejected("Sir did not share Notes....");
}
});
promiseForNotes.then(function(sucess){
console.log("I got the notes");
}).catch(function(failure){
console.log("Are yaar.....no notes");
}).finally(function(){
console.log("You should have always Notes");
});*/

/* gajanan sir*/
const isSirAvailable = true;
let promiseForNotes = new Promise( function(resolve, reject){
    if (isSirAvailable) {
        resolve("promise and map.pdf");
    }else{
        reject("Sorry I didn't get time..");
    }
});

promiseForNotes.then( function(success) {
    console.log(success, "I got the notes let me read it.....");
}).catch( function(failure) {
    console.log(failure, "Are yaar.. kaise teacher hai ye....");
}).finally(function(){
    console.log("You should have always have your notes...");
})


/*by using arrow function*/
const isSirAvailable = true;
let promiseForNotes = new Promise( (resolve, reject) =>{
    if (isSirAvailable) {
        resolve("promise and map.pdf");
    }else{
        reject("Sorry I didn't get time..");
    }
});

promiseForNotes
.then( success => console.log(success, "I got the notes let me read it....."))
.catch( failure => console.log(failure, "Are yaar.. kaise teacher hai ye...."))
.finally(()=> console.log("You should have always have your notes..."));
