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




function loginUserMessage(username) {
    if(!username) {     // output => Please entera a username; undefined same output as line no. 57

        console.log("Please entera a username");
        return;
    }
    return `${username} just logged in`
}



console.log(loginUserMessage())  