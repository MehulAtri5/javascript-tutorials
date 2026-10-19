// for of 

const arr = [1,2,3,4,5]

for (const num of arr)  {
    //console.log(num);
    }

const greetings = "Hello World" 
for (const i of greetings) { 
    if (i == " ") continue ;
    // console.log(i); 
    }
const map = new Map()  //maps are not iterable
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

for (const [key,value] of map) {   // i --> [key,value] --> it is Destructuring of Map
    // console.log(key, ':-', value);
    }

const myObject = {   // not iterable via for of
    game1 : "NFS",
    game2 : "GTA 5"
}

// for (const i of myObject) {
//     console.log(i);
//     }