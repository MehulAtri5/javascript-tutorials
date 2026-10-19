const myObject = {
    js : "javascript" ,
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

// for in 

for (const key in myObject) {
    // console.log(`${key} is shortcut of ${myObject[key]}`);
 }

const arr = ['js', 'cpp', 'swift', 'ruby'] 

for (const key in arr) {
    console.log(`${key} : ${arr[key]}`);
}