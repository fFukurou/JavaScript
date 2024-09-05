// let js = "amazing";
// if (js == "amazing") {
// //   alert("JavaScript is FUN!");
// }
// console.log(40 + 2 - 21 + (21 / 2) * 2);

const firstName = "Fukurou";
const myAge = 20;
let job = "jobless";
// console.log(firstName);
// console.log(typeof (firstName));

console.log(`My name is ${firstName}, I'm ${myAge} years old, and I'm currently ${job}, and this is a number: ${(2 + 3 / 3 ** 1)}`);

console.log(`String
multiple
lines`);

const isOldEnough = myAge >= 18;
if (isOldEnough){
    console.log(`${firstName} can drive (theorically) since he is above the age of 18...`);
} else {
    console.log(`${firstName} can not drive, as he is not above the age of 18... Wait ${18-myAge} more years.`)
}

let century;
const birthYear = 2004;

if (birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}

console.log(`${firstName} was born in the ${century} century`);

let day = 'Thursday';

switch (day){
    case 'Monday':
        console.log("bruh today is monday");
        break;
    case 'Thursday':
        console.log(`Today is thursday... ok`);
        break;
    default:
        console.log("I'm so tired");
}

const johnAge = 23;

// TERNARIES
johnAge >= 18 ? console.log("John likes to drink sake") : console.log("John isn't old enough to drink sake");

const drink = johnAge >= 18 ? true : false; // drink will be true/false

console.log(`John really likes to drink ${johnAge >= 18 ? 'sake' : 'water'}`);

