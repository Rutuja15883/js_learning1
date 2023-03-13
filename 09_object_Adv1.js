const player ={
    fullName:"Virat Kohali",
    totalCenturies:46,
    isMarried:true
};

player.totalVicket=20;
console.table(player); 

Object.freeze(player);//we cannot change the object(add,modify,delete)
//update ismarried
player.isMarried=false;
console.table(player);

//delete any property
delete player.totalCenturies;
console.table(player)


//createing 2 seperate object and Merge it
const student={
    fullName :"Kadambari More",
    class: 3,
    age :9
};
const address={
    city :"satara",
    country:"India",
    pinCode:411028
};
 const newObject={};
 Object.assign(newObject,student,address);//concatinet  two object
 console.table(newObject);