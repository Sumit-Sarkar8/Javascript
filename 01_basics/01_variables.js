const accountId =  144553;
let accountEmail = 'sumit@google.com';
var accountPassword = '12345';
accountCity = 'Gorakhpur'; // Please do not declare varibale like this
let accountState

 // accountId = 2; // not allowed b'coz this is constant

 accountEmail = 'sum@google.com';
 accountPassword = '343455';
 accountCity = 'Uttar Pradesh';

console.log(accountId);

/*
Prefer not use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);