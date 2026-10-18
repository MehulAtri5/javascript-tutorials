function sayMyName() {
    console.log("Mehul")
}

sayMyName  // -> reference 
sayMyName() // -> execution 

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2) ;
}

const result = addTwoNumbers(3,4) ; 
console.log("result: ", result);  // --> prints the return value of the function

// Printing Return Value 
function subTwoNumbers(num1, num2) {
    // let res = (num1 - num2) ;
    //return res ;
    return num1 - num2 
}

const subResult = subTwoNumbers(8, 10) ;
console.log("result: ", subResult);

// return ke baad kuch bhi execute ni hota 

function loginUserMessage(username) {
    return `${username} just logged in`
}

console.log(loginUserMessage("Mehul"));
console.log(loginUserMessage()); // returns undefined 

function logoutUserMessage(username) {  // (username = 'mehul')  -> default value 
    if (username === undefined || !username) {   // both condn have same meaning 
        return "enter a username" 
    }
    return `${username} is logged out`
}

console.log(logoutUserMessage()) 

// shopping cart problem 

function calculateCartPric(...num1) {  // ... is called rest operator 
    return num1 
} 


// handling objects in function 
function handleObject (anyobject) {
    console.log(`product: ${anyobject.name} , price: ${anyobject.price}` );
    return 
}

handleObject({
    name : "dishwasher",
    price : 4999 
})

// handling arrays 

const arr = [100,200,300,400] 

function returnSecondValue(getarray) {
    return getarray[1] 
}

let valueOfArr = returnSecondValue(arr) ;
console.log(valueOfArr);


console.log(returnSecondValue([1,2,3,4]));





