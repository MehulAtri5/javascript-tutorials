const tinderUser = new Object () // Singleton object 
// const tinderUser = {} // non singleton object 

tinderUser.id = "123abc"
tinderUser.name = "Sameer" 
tinderUser.isLoggedIn = false

// console.log(tinderUser)  ; 

const regularUser = {
    email : "some@gmail.com" ,
    fullName : {
        userFullname : {
            firstName : "Sameer" ,
            LastName : "Thakur" 
        }
    }
}

// console.log(regularUser.fullName?.userFullname.firstName);

const obj1 = {1:"a" , 2:"b"} 
const obj2 = {3:"a" , 4:"b"} 
const obj3 = {5:"a" , 6:"b"} 

obj4 = Object.assign({},obj1,obj2,obj3) // {} --> target object  
// console.log(obj3);

obj5 = Object.assign(obj1,obj2) // obj1 --> target object  
// console.log(obj5 == obj1); // true 

obj6 = {...obj1,...obj2} ; //---> Spread, used 90% of time

// when values come from DB

const users = [
    {
        id : 1,
        email : "1@gmail.com"
    } ,
    {
        id : 2,
        email : "2@gmail.com"
    } ,
    {
        id : 3,
        email : "3@gmail.com"
    }
]

// console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // returns array....very Important
// console.log(Object.values(tinderUser)); // returns array....very Important
// console.log(Object.entries(tinderUser)); // [[],[]]

// console.log(tinderUser.hasOwnProperty("abc")); 
// console.log(tinderUser.hasOwnProperty("id")); 


// destructuring of objects 

const course = {
    courseName : "bkchodi nayak",
    price : 6969, 
    instructor : {
        firstName : "Sameer",
        LastName : "Dalla"
    }
}

const{courseName : courseKaNaam} = course ;  // destructuring 
console.log(courseKaNaam); 

// {
//     "name" : "Sameer",
//     "timepass" : "NCC",
// }

[
    {},
    {},
    {}
]






