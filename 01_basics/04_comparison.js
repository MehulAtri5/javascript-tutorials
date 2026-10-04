// comparison 
// ==,<=,>=,<,>

// console.log("2" > 1);
// console.log("02" > 1);

// !! NOTE : Avoid these conversions similar to conversions given below 

console.log("Comparing Null");

console.log(null > 0);  //false
console.log(null < 0);  // false
console.log(null >= 0);  // true => coverting to 0 
console.log(null <= 0);  // true 
console.log(null == 0);  // false 

console.log("Comparing undefined");


console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false

// Strict check 
console.log("Strict Check");

console.log("2" === 2 )