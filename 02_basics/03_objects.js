// singleton
// Object.create 


// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Sumit",
    "full name": "sumit",
    // mySym: "mykey1", // this is string not a symbol
    [mySym]: "mykey1",  // this is symbol to access this you have to right syntax like this console.log(JsUser[mySym])
    age: 22,
    location: "Gorakhpur",
    email: "sumit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log((JsUser.location)); output => Gorakhpur
// console.log(JsUser["location"]);  output => Gorakhpur
// // console.log((JsUser.full name)); // you can't do this
// // console.log((JsUser.full name)); // you can't do this
// console.log(JsUser["full name"]);  // you can use this syntax
// console.log(JsUser.mySym); // output => key1 but this is not symbol
// console.log(typeof JsUser.mySym); // output => string

// console.log(JsUser[mySym]); // output => key1
// console.log(typeof JsUser[mySym]); // output => string  go to mdn docs


JsUser.email = "sumit@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "sumit@microsoft.com";
// console.log(JsUser.email); // output => sumit@chatgpt.com


// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());          // output => Hello JS user
console.log(JsUser.greetingTwo());      // output => Hello JS user, Sumit undefined


// console.log(JsUser.greeting); // output => [Function (anonymous)]
// console.log(JsUser.greeting());




myArray = ["s", "u", "m", "i", "t"];
myArray[1];