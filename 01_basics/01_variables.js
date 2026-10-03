const account_Id = 144553 //constant - can't be changed 
let accountEmail = "mehul@gmail.com" 
var accountPass = "12345" //variable - not used much due to past scope problems 
accountCity = "jaipur" // Undefined 

let accountState 

/* 
prefer to use let over var 
beacuse of issue in block scope and funtional scope
*/

// account_Id = 12 // not allowed 
console.log(account_Id) 

accountEmail = "asd"
accountPass ="2121"
accountCity = "hamirpur"

console.table([accountEmail,accountPass,accountCity,accountState])