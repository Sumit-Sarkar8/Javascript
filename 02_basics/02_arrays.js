const marvel_heros = ["Iron man", "thor", "spiderman"];
const dc_heros = ["superman", "batman", "flash"];

marvel_heros.push(dc_heros);
// console.log(marvel_heros); // output => [ 'Iron man', 'thor', 'spiderman', [ 'superman', 'batman', 'flash' ] ] : it returns existing array
// console.log(marvel_heros[3][1]); output=> batman

//  const alllHeros = marvel_heros.concat(dc_heros);
// console.log(alllHeros); // output => [ 'Iron man', 'thor', 'spiderman', 'superman', 'batman', 'flash' ] : it returns new array

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros); // output => [ 'Iron man', 'thor', 'spiderman', 'superman', 'batman', 'flash' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // output => [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Sumit")); // output => false
console.log(Array.from("sumit")); // output => [ 's', 'u', 'm', 'i', 't' ]
console.log(Array.from({ name: "sumit" })); // output => []  // interseting


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]  It converts variable into array