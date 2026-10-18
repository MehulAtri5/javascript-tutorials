// Immediately Invoked Function Expression (IIFE)
// It is used to avoid problem due to global scope 

(function chai() {
    console.log(`DB Connected`) ;

}) () ; // this ; is used to end context here 

((name) => {
    console.log(`hello ${name}`)
})('Mehul')

