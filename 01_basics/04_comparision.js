// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);


// IN MOST OF THE CASES WE AVOID THIS TYPE OF COMPARISION CASES 
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0);
// _____________________________________________________________________________

// The reason is that an equality check == and comparisions > < 
// >=  <= work differently.
// Comparisions convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 false.