// Primitive

// 7 types of Primtiive datatype :- String, Number, Boolean, null, undefined, symbol, bigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

// This is an important datatype
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 3434565633233n;

// Reference (Non-primitive)

// Arrays, Objects, Functions

const avengers = ["Ironman", "Hulk", "Thor", "Captain America"];

let myObj = {
  name: "Sumit",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction); // we call function as object function and it's output is function
console.log(typeof avengers); 

console.table(["anotherId", "bigNumber", "outSideTemp", "scoreValue", "myFunction", "avengers"]);

