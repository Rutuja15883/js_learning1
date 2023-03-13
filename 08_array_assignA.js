//arrary declaration and Intialization
const arraySeasonalFruit=["Banana","Orange","Apple","Mango","Water_Melon"];
console.log("*****Display the array*******");
console.log(arraySeasonalFruit);

console.log("******** 1. Display First  and last Element of an array*********");
const arrayFirstElement=arraySeasonalFruit[0];
console.log(`first element is=arrayFirstElement="${arrayFirstElement}"`);
const arrayLast=arraySeasonalFruit.length-1;
const last=arraySeasonalFruit[arrayLast];
console.log( `Array of last element is="${last}"`);

console.log("*** 2. Add element ->Papaya before Banana and log array***");
console.log(`Before adding papaya array is=${arraySeasonalFruit}`);
arraySeasonalFruit.unshift("papaya");
console.log(`After adding papaya array is=${arraySeasonalFruit}`);

console.log("****3. After removing Mango array is ******");
const removeMango=arraySeasonalFruit.splice(4,1);
console.log(arraySeasonalFruit);

console.log("****4.Add /insert element Pinapple at last position in  array is ******");
arraySeasonalFruit.push("pineapple");
console.log(arraySeasonalFruit);

console.log("***** 5. Insert Dragon fruit before Water melon *****");
console.log(arraySeasonalFruit);
arraySeasonalFruit.splice(4,0,"Dragon_Fruit");
console.log(arraySeasonalFruit);

console.log("***** 6.Replace an element Orange with Kiwi*****");
console.log(arraySeasonalFruit);
arraySeasonalFruit.splice(2,1,"KIWI");
console.log(arraySeasonalFruit);

console.log("***** 7.Display an element from 1t0 4***** ");
console.log(arraySeasonalFruit);
console.log(arraySeasonalFruit.slice(1,5));

console.log("***** 8. select last 3 element by using length property *****");
arraySeasonalFruit.length-arraySeasonalFruit.splice(0,4);
console.log(arraySeasonalFruit);