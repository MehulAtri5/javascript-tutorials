// singleton --> from constructors not from litrals 
// Object.create

// Object Litrals 

const mysalary2030 = Symbol("Bhai ki salary") 

const JsUser = {
    name: "Mehul", 
    "full name" : "Mehul Atri",
    [mysalary2030]: 4300000, // using symbol as key in object (correct syntax)
    age: 20,
    location: "hamirpur", 
    email: "mehul@google.com",
    isLoggedIn: true, 
    lastLoginDays: ["Monday", "Saturday"] 
} 

// // accessing values from objects 
console.log(JsUser.name)
// console.log(JsUser"full name"); --> not allowed (syntax error)
console.log(JsUser["name"]) ; 
console.log(JsUser["full name"]);
console.log(JsUser[mysalary2030]);
console.log(typeof JsUser[mysalary2030]);

JsUser.email = "mehul@openai.com" 
console.log(JsUser["email"])
// Object.freeze(JsUser) // can't change values of object 

// JsUser.email = "me@openai.com"
// console.log(JsUser["email"])

console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hii");
    
}
JsUser.greeting2 = function() {
    console.log(`Hii ${this["full name"]} aged ${this.age}`); // interpolation in obj function
    
}

console.log(JsUser.greeting) // [Function (anonymous)]  (bs reference aya hai)
console.log(JsUser.greeting()) // Hii '\n' undefined
console.log(JsUser.greeting2()) // 
