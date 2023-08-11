const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // importand method

// const otherNumber = 23.8966; // output => 23.9
// const otherNumber = 123.8966; // outpur => 124
const otherNumber = 123.8966; // output => 1.12e+3

// console.log(otherNumber.toPrecision(4)); // important method

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // output => 1,000,000 It gives comma on the base of Us standard
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // output => 4 basically it gives postively of a  num positive to positive and neg to positive
// console.log(Math.round(4.3)); // output => 4  and value of 4.6 it gives you 5
// console.log(Math.ceil(4.2)); // output => 5; CIELING MEANS TOP that's why it always give you top no.
// console.log(Math.floor(4.2)); // output => 4; opposite of ceil
// console.log(Math.min(4, 3, 6, 8)); // output => 3
// console.log(Math.max(4, 3, 6, 8 )); // otuput => 8

console.log(Math.random()); // it gives value btw 0 to 1
// console.log(Math.random()*10); // read on mdn 
// console.log(Math.random()*10 + 1);
// console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); // wrap up with Math.floor method to get min value 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);



