const user = {
    name : "Mehul" ,
    price :  399 ,

    welcomeMessage : function () {
        console.log(`${this.name}, welcome`);
        console.log(this);
        
        
    } ,
    
    

    
}

// user.welcomeMessage() 
// console.log(this);
// user.name = 'Yashovardhan' 
// user.welcomeMessage()

/* function chai() {
    let username = "Sameer"
    console.log(this.username) ;  // can't use (this) in funtions (returns undefined) as it is only working in Objects 
    console.log(username) ;
}

// chai() */

// const chai = function() {
//     let username = "Sameer"
//     console.log(this.username) ;  // can't use (this) in funtions (returns undefined) as it is only working in Objects 
//     console.log(username) ;
// }

// chai()

// Arrow Function



// const chai = () => {
//     let username = "Sameer"
//     console.log(this.username) ;  // can't use (this) in funtions (returns undefined) as it is only working in Objects 
//     console.log(username) ;
// }
// chai()

/* function returns different values using this keyword 
while arrow function only returns curly brackets {} 
uncomment line 54-66 for demo */


// function xx() {
//     console.log(this);
    
// }

// xx()

// const nt = () => {
//     console.log(this);
    
// }

// nt()

const addtwo = (n1,n2) => {
    return n1 + n2 ;
}

const adtwo = (n1 , n2) => (n1 + n2)

const aadtwo = (n1 , n2) => n1 + n2 

// returning objects in arrow function 

// const xyz = () => {username : "mehul"} // returns undefined 
const xyz = () => ({username : "mehul"}) // returns the object  
console.log(xyz())

 