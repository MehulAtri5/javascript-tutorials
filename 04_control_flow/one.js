//if 

// const user = {
//     name : "Mehul" ,
//     email : "mehul@google.com",
//     isUserLoggedIn : false
// }
 
// if (user.isUserLoggedIn) {
//     console.log(`yes ${user.name} is logged in with email: ${user.email}`);
    

// } else {
//     console.log(`nobody is logged in`);
    
// }

// strict equal : === --> used for checking types for eg 2 === '2' 

// const balance = 1000 
// if (balance > 1000) console.log("yes") 
// console.log("no error");

const userLoggedIn = true 
const debitCard = true 

if (userLoggedIn && debitCard ) {
    console.log(`allow to buy course`);
    
}

const loggedInFromGoogle = false 
const loggedInFromYahoo = false 

if (loggedInFromGoogle || loggedInFromYahoo) {
    console.log(`Logged in from`) 
    if (loggedInFromGoogle) console.log("google");  else console.log("Yahoo")
    
} else console.log(`not logged in`) ;


    