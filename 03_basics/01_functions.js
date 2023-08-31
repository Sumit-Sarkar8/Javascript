function sayMyName() {
  console.log("S");
  console.log("U");
  console.log("M");
  console.log("I");
  console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumbers() // output => NaN



// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4)         // output => 7
// addTwoNumbers(3, "4");     // output => 34
// addTwoNumbers(3, "a");     // output => 3a
// addTwoNumbers(3, null);   // ouput => 3


/* const result = addTwoNumbers(3, 5);   //  output => 8

console.log("Result:", result)   //  output => undefined */



// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2
//     console.log("sumit")   // log it prints when you log before return
//     return result
// }

// const result = addTwoNumbers(3, 5)
// console.log("RESULT:", result);  // output => 8


// THE OTHER WAY TO RETURN PARAMETERS 
function addTwoNumbers(number1, number2) {
   
        return number1 + number2
    }
    
    const result = addTwoNumbers(3, 5)
    // console.log("RESULT:", result);  // output => 8



//     function loginUserMessage(username) {
//         if(username === undefined) {   // output => Please entera a username; undefined
//             console.log("Please entera a username");
//             return;
//         }
//         return `${username} just logged in`
//     }

// //    console.log( loginUserMessage("sumit"));  // output => sumit just logged in 
// //    console.log(loginUserMessage(""));  // output =>  just logged in
// console.log(loginUserMessage());  // output => undefined just logged in




// function loginUserMessage(username) {
//     if(!username) {     // output => Please entera a username; undefined same output as line no. 57

//         console.log("Please entera a username");
//         return;
//     }
//     return `${username} just logged in`
// }



// console.log(loginUserMessage())  


// ____________________________________________       PART-2      __________________________________________________________                   

// function calculateCartPrice(num1) {
//     return num1;
// }

// // console.log(calculateCartPrice(2)); // output => 2
// console.log(calculateCartPrice(200, 400, 500));  // output => 200

// function calculateCartPrice(...num1) {
//     return num1;
// }

// console.log(calculateCartPrice(200, 400, 500)); // output => [ 200, 400, 500 ]    returns an array

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));


// Object as a function 
const user = {
  username: "Sumit",
  price: 199,
}

function handleObject(anyObject) {
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)  // output => Username is sumit and price is 199



// ANOTHER WAY TO DEFINE OBJECT AS A FUNCTION 
handleObject({
  username: "Peter",
  price: 399,
})

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); // output => 400
console.log(returnSecondValue([200, 400, 500, 1000]));  // output => 400