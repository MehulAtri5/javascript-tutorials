 const name = "Mehul" ;
 let age = 20 ;

 console.log(`hello my name is ${name.toUpperCase()} and my age is ${age} and I'm learning javascript for backennd development`) //string interpolation

//  console.log(name.touppercase()) -> will give error because it is case sensitive and correct is toUpperCase()

//method of declaring string

//m1 
const str1 = "Hello-World" ; // double quotes

//m2
const str2 = new String("Hello World") ; // using new keyword (objects of Js)


console.log(str2[0]) // 

// Some methods or functions of string
console.log(`length : ${str2.length} `) // 11

console.log(str2.toUpperCase()) // HELLO WORLD

console.log(str2.charAt(2))
console.log(str2.indexOf('W'))

const newString = str1.substring(0,5) // it will return string from index 0 to 5 (not including 5) (no neg values allowed in substring method)
console.log(newString) // Hello
console.log('Sliced :') // Hello

console.log(str2.slice(-11, 4))

const newstr1 = "     mehul    " ;
console.log(newstr1)
console.log(newstr1.trim()) // it will remove the spaces from start and end of string

const url = "https://mehul.com/name/mehul%20atri" 

console.log(url.replace('%20','-') ) // it will replace the first occurence of %20 with -

console.log(url.includes('mehul')) // it will return true if the string contains 'mehul' otherwise false

// string to array 
const mmr = "Mehul-Atri-backend-developer" ;

console.log(mmr.split('-')) // it will return array of string by splitting the string at '-' (delimiter)

// can read more by searching string split mdn 








