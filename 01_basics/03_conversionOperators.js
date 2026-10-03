let score = "33" ; 
// checking Type
console.log("before conv :" , typeof score);
// console.log(typeof (score));  // => Method 

let valueInNumber = Number(score)    
console.log("after conv :" , typeof valueInNumber); 

/* Converstion to Number 
"abc123" => NaN
Null => 0
undefined => NaN
true => 1
false => 0
"mehul" => 

(NaN means Not a number) 
*/

let isLoggedIn = 1 ; 

console.log("Bool Converstion");

let booleanIsLI = Boolean(isLoggedIn) ;  
console.log(booleanIsLI);  

/* Conversion to Boolean

1 => true
0 => false
"" => false
"Mehul" => true

*/

let no = 18 ; 

let stringnumber = String(no)

console.log(stringnumber) ; 
console.log("and its type :",typeof stringnumber) ; // 18 to "18"

// *************************** Operations *************************************

let value = 3
let negValue = -value 
console.log(negValue); // returns -3 

// 2**3 means 2^3 

console.log("1" + 2); // returns 12 
console.log(1 + "2"); // returns 12
console.log("1" + 2 + 2); // returns 122
console.log(1 + 2 + "2"); // returns 32

console.log(+true); // returns 1 
console.log(+""); // returns 0
console.log(+ " "); // returns 0


let num1, num2, num3 

num1 = num2 = num3 = 2 + 2 ; 



let gameCounter = 100 
gameCounter++ // postfix 
console.log(gameCounter);
++gameCounter // prefix 
console.log(gameCounter)












                                  