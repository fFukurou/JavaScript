'use strict';

function logger(){
    console.log(`My name is Fukurou`);
}

logger();

// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;

//     return juice;
// }

console.log(fruitProcessor(5, 3));

function calcAge1(birthYear){
    return 2024 - birthYear;
}

let age = calcAge1(2004);

// FUNCTION EXPRESSION
const calcAge2 = function (birthYear){
    return 2024-birthYear;
}

let age2 = calcAge2(2004);

// ARROW FUNCTION
const calcAge3 = birthYear => 2024 - birthYear;
let age3 = calcAge3(2004);

console.log(age, age2, age3);

// const yearsUntilRetirement = (firstName, birthYear) => {
//     const age = 2024 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years. Unless you start investing to get some passive income, of course.`;

// }




function cutFruitPieces(fruit){
    return fruit * 4;
}



function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;

    return juice;
}

const yearsUntilRetirement = (firstName, birthYear) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years. Unless you start investing to get some passive income, of course.`;
    }
    else if (retirement < 0){
        return `${firstName} should have retired ${-retirement} years ago.`;
    } else {
        return `${firstName} is retiring this year... must be nice.`;
    } 

}

console.log(yearsUntilRetirement("Fukurou", 2004));
console.log(yearsUntilRetirement("Kratos", -400));
console.log(yearsUntilRetirement("Eren", 1959));

// ARRAYS

const friends = ["Michael", "Kratos", "Frieren"];
 console.log(friends);
 console.log(friends.length);
 console.log(friends[2], friends[1]);

 const years = new Array(2004, 1999, -2132, 12);
 console.log(years);
 console.log(years[years.length-1]);

friends[0] = "Jay";
console.log(friends);

const fukurou = ["Fukurou", 20, "Student", "Depressed", 2025 - 2005, friends];
console.log(fukurou);

const ages = [calcAge1(years[0]), calcAge1(years[2]), calcAge1(years[years.length-1])]
console.log(ages);