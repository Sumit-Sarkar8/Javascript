// ARRAY

const myArr = [0, 1, 2, 3, 4, 5];
// const myArr = [0, 1, 2, 3, 4, 5, true, "hello"]; // this is also  a array we can define any datatypes as element of array
// const avengers = ["Iron man", "Hulk", "Captain america"];
// console.log(myArr[1]);

const myArr2 = new Array(1, 2, 3, 4, );
// console.log(myArr2[2]);


// ARRAY METHODS

// myArr.push(6); // it add new element in last:     output => [0, 1, 2, 3, 4, 5, 6]
// myArr.push(7); // it add new element in last:     output => [0, 1, 2, 3, 4, 5, 6, 7]
// myArr.pop(); // it remove last element of array:  output => [0, 1, 2, 3, 4, 5, 6]

// myArr.unshift(9); // it add element in starting:     output => [9, 0, 1, 2, 3, 4]
// myArr.shift();   // it remove starting element :     output => [0, 1, 2, 3, 4, 5]

// console.log(myArr.includes(9)); // output => false
// console.log(myArr.indexOf(3)); // output => 3


// CONVERT ELEMENT INTO STRING 

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof (newArr) );




// SLICE & SPLICE

console.log("A", myArr); // original array

const myn1 = myArr.slice(1, 3);
console.log( "B", myArr); // slice array
console.log(myn1);

const myn2 = myArr.splice(1, 3); 
console.log("C", myArr); // splice array
console.log(myn2);


