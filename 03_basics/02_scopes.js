
// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }



// console.log(a);
// console.log(b);
// console.log(c); // output => 30  


let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    console.log("INNER: ", a);  // output => INNER:  10
}

console.log(a); // output => 300 