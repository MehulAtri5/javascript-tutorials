// Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100 ; 
// in typescript : const score:number = 100 ;

const scoreValue = 100.3 ; // its a number as well 

const isLoggedIn = false ; 
const outsideTemp = null ; 

let userEmail ; // undefined 
let myEmail = undefined ; 

// symbols 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // false 

const bigNumber = 101010101010010101010n // bigInt 




// Js is a dynamically typed language 

// Reference or Non-Primitive 
// Array, Object, Functions 


// Array 
const heros = ["shaktiman", "naagraj", "doga"]


// Object 
let myInfo = {
    name: "Mehul" ,
    age : 20 ,
    bloodGroup : "O-"
}

// function (variable wala tarika)

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber)
console.log(typeof myFunction); // it will return funtion but in documentation it is called Funtion Object

console.log(typeof Symbol('123')) // symbol;


// documentation : 
// https://262.ecma-international.org/5.1/#sec-11.4.3


