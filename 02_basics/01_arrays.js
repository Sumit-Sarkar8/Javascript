// array


const myArr = [0, 1, 2, 3, 4, 5]; // inside the bracket, any data called as element 
const Avengers = ["Iron man", "Hulk", "Captain", "Thor"];
// console.log(myArr[1]);
// console.log(Avengers[0]);

const myArr2 =  new Array(1, 2, 3, 4);
// console.log(myArr[1]);


// ARRAY METHODS

// myArr.push(6); output => it adds 6 in last 
// myArr.push(7); // same output as 6
// myArr.pop();  // output => remove last element

// myArr.unshift(9); output => it adds element in starting of the array
// myArr.shift(); output => it removes the starting element of the array

// console.log(myArr.includes(9)); output => false, as 9 is not element of the array
// console.log(myArr.indexOf(9)); // output => 9
// console.log(3); // output => 3

// const newArr = myArr.join(); output => elements of the array converts into string 

// console.log(myArr);  // output => [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); // output => 0, 1, 2, 3, 4, 5
// console.log( typeof newArr);


// SLICE  & SPLICE

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);