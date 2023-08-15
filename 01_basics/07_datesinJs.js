let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof (myDate)); // output => object

// Declare new date 
// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-14"); // syntax yy-mm-dd output => 1/14/2023  In India we not follow this syntax
let myCreatedDate = new Date("01-14-2023"); // syntax mm-dd-yy output => 1/14/2023  In India we follow this syntax
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();

// console.log(myTimeStamp); // output => 1692089126965, this the value of millisecond since 1 jan 1970 to today's time

// console.log(myCreatedDate.getTime());  // output => 1673654400000  milliseconds

// console.log(Date.now()); // ouput => 1692089404086 millisec    today's date in millisecond

// console.log(Date.now()/1000); // output => 1692089511.413 second  it gives you today's time in sec but in decimal
// console.log(Math.floor(Date.now()/ 1000)); // output => 1692089675 today's date in second

let newDate = new Date();
// console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// `${newDate.getDay() and the time}`

newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone:  
})




