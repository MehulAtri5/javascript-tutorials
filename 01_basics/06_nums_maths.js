const balance = new Number(50000000.1234)
console.log(balance)

console.log(balance.toString().length) // 13
console.log(balance.toFixed(2))  // use it in E-Com websites 

const num = 23.5566 

console.log(num.toPrecision(2))  // roundof 24
console.log(num.toPrecision(3))  // roundof 23.6
console.log(num.toPrecision(1))  // roundof 2e+1 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // Indian Standards
console.log(hundreds.toLocaleString()) // US standards

// --------------------Maths-------------------------------------

console.log(Math) ;
console.log(Math.abs(-55)) ;
console.log(Math.round(5.5)) ;
console.log(Math.ceil(5.3)) ;
console.log(Math.floor(5.9)) ;

console.log(Math.sqrt(49))
console.log(Math.sin(10))

const arr = [1,3,4,5,10]

console.log(Math.min(1,23,4,5,-1))

console.log(Math.random())   // 0 to 1 
console.log(Math.floor((Math.random()*6) + 1) )

const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


