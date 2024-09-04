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