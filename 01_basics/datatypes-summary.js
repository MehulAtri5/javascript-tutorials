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



//+++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) and Heap (Reference) memory


let myInsta = "Mehulatrii" ; 
let anotherInsta = myInsta ;

console.log(myInsta) // Mehulatrii
console.log(anotherInsta) // Mehulatrii

myInsta = "Mehul" ;

console.log(myInsta) // Mehul
console.log(anotherInsta) // Mehulatrii

// Therefore, primitive data types are stored in stack memory and when we assign a variable to another variable, it creates a copy of the value in the new variable.

let user = { 
    email : "abc@gmail.com", 
    upi : "abc@upi"
}

let user2 = user ;

console.log(user.email) 

user2.email = "def@gmail.com"

console.log(user.email) //

// therefore, in reference data types, when we assign a variable to another variable, it creates a reference to the same object in memory. So, if we change the value of one variable, it will also change the value of the other variable.
