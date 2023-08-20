// const tinderUser = new Object();  // output => {}  this is singleton object
const tinderUser = {}; // output => {}

tinderUser.id = "123abc";
tinderUser.name = "Penny";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "sumit@google.com",
  fullname: {
    username: {
      firstname: "Sumit",
      lastname: "Sarkar",
    },
  },
};

console.log(regularUser.fullname.username.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };
// const obj3 = { obj1, obj2 } // output => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign(obj1, obj2);  // ouput => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// const obj3 = Object.assign({}, obj1, obj2, obj4); output => {'1': "a"}

// const obj3 = {...obj1,...obj2} // output => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } // this syntax use for merge
// console.log(obj3);d



// DATA FROM DATABASE
const users = [
  {
    id: 1,
    email: "sumit@google.com",
  },

  {
    id: 1,
    email: "sumit@google.com",
  },

  {
    id: 1,
    email: "sumit@google.com",
  },
];

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  // output => [ 'id', 'name', 'isLoggedIn' ]   KEYS PRINT
console.log(Object.values(tinderUser)); // output => [ '123abc', 'Penny', false ]    VALUES PRINT
console.log(Object.entries(tinderUser)); // output => [ [ 'id', '123abc' ], [ 'name', 'Penny' ], [ 'isLoggedIn', false ] ]  ARRAY INSIDE ARRAY 

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // output => true;
console.log(tinderUser.hasOwnProperty("isLogged")); // output => false;
