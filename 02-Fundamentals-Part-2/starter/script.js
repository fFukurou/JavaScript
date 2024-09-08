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

let fukurou = ["Fukurou", 20, "Student", "Depressed", 2025 - 2005, friends];
console.log(fukurou);

const ages = [calcAge1(years[0]), calcAge1(years[2]), calcAge1(years[years.length-1])]
console.log(ages);

// ARRAY METHODS

// will add to the end of the array
friends.push("Monarch");

// will add to the start of the array
friends.unshift("Prez");

// remove last element from an array
friends.pop();

// remove first element
friends.shift();

console.log(friends);

// Getting index from an element
// elements that do not exist in the array will return -1
console.log(friends.indexOf('Kratos'));

if (friends.includes('Prez')) {
    console.log(`You have a friend called Prez!`);
} else {
    console.log(`Prez is not your friend... :(`);
}

// OBJECTS

let fFukurou = {
    firstName: "Fukurou",
    lastName: "Sakai",
    age: 2300 - 2280,
    job: 'unemployed',
    friends: friends,
};

const nameKey = "Name";

console.log(fFukurou['age']);
console.log(fFukurou['first' + nameKey]);
console.log(fFukurou['last' + nameKey]);

fFukurou.location = "Japan";
fFukurou['status'] = "coding";

// const answer = prompt("What do you want to know? age, firstName, lastName, job, friends, status, location?");

// if (fFukurou[answer] != undefined) {
//     console.log(fFukurou[answer]);

// } else {
//     console.log("Invalid answer");
// }

console.log(`${fFukurou.firstName} has ${fFukurou.friends.length} friends, and his best friend is ${fFukurou.friends[2]}`);

fFukurou = {
    firstName: "Fukurou",
    lastName: "Sakai",
    birthYear: 2004,
    job: 'unemployed',
    friends: friends,
    isHappy: false,

    // calcAge4: function() {
    //     console.log(this);
    //     return 2024 - this.birthYear;
    // }
    calcAge4: function(){
        this.age = 2024 - this.birthYear;
        return this.age;
    }
};

console.log(fFukurou.calcAge4());
console.log(fFukurou.age);

console.log(`${fFukurou.firstName} is a ${fFukurou.age}-year old student, and he ${fFukurou.isHappy ? 'is happy' : 'is sad'}.`);

// LOOPS

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

console.log("---------------ARRAYS-------------------")

const fukurouArray = ["Fukurou", 20, "Student", "Depressed", 2025 - 2005, friends];

fukurouArray.forEach(element => {
    console.log(element, typeof element);
});

for (let i = 0; i < fukurouArray.length; i++) {
    if (typeof fukurouArray[i] === 'string') {
        continue;
    }
    console.log(fukurouArray[i]);
}   

const dummyArray = [2020, 20224, 2101, 39022, "3812190", 231, 10 , 21921 , 21321, 432]

for (let i = 0; i < dummyArray.length; i++) {
    if (typeof dummyArray[i] === 'string') {
        break;
    }
    console.log(dummyArray[i]);
}

// Looping bakcwards


for (let i = fukurouArray.length - 1; i >= 0; i--) {
    console.log(fukurouArray[i]);
}


// Nested loops

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`-------- Starting Exercise ${exercise}`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise} | repetition ${rep}`);
    }
}

// While loop

let bruh = 0;

while (bruh < 4) {
    console.log(`While bruh = ${bruh}`);
    bruh++;
}

console.log("---------- DICE ROLL --------------");

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}

console.log(`You finally rolled a --> 6 <-- !!`);