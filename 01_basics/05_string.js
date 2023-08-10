const name = "sumit"; // how to declare string (1)
const repoCount = 50;

// console.log(name + repoCount + "value"); // Not recommend this type of syntax  this is outdated nowdays

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // practices in modern days

const gameName = new String("sumitst"); //  another way to declare sting (2) 

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4); // how to slice string 
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);


const newStringOne = "  sumit     "
console.log(newStringOne);
console.log(newStringOne.trim()); // important method of string

const url = "https://sumit.com/sumit%20sarkar";

console.log(url.replace("%20", "-")); // important method of string

console.log(url.includes("sumit")); // another important method; result => true;
console.log(url.includes("chiku"));

// How to convert string into an array
const movieType = "Marvel-movie-com";
console.log(movieType);
console.log(movieType.split("-")); // output => [ 'Marvel', 'movie', com] YOU CAN SPLIT STING ON THE BASIS OF SPACE, DASH, UNDERSCORE ETC.
