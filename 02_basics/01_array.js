// Array

const myArr = [0,1,2,3,4,5] ;
const myArr1 = ["Mehul Atri", 20, "28-09-2006"] ;

// array is an object 
// JavaScript arrays are resizeable 
// JavaScript arrays are not associative arrays and so, arrays elements cant be accessed using arbitrary strings as indexes

// console.log(myArr[0]) ;

// arrya-copy operations created shallow copies (copy share same reference) 

const myHeros = ["thor" , "loki"] ; 
const myArr2 = new Array(1,2,3) ; 

// console.log(myArr2.length) ;

//Array methods

myArr.push(6) ;  
myArr.push(7) ;  
myArr.pop() ;

myArr.unshift(9) ;
myArr.shift() ; 

// console.log(myArr.includes(9));  // false
// console.log(myArr.indexOf(9));  // -1
 

const newArr = myArr.join () 

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice 

const myn1 = myArr.slice(1,3) ; 
console.log("Sliced :");

console.log('A' , myArr);
console.log(myn1) 


const myn2 = myArr.splice(1,3) ; 
console.log("Spliced :");

console.log('B' , myArr);
console.log(myn2) 

