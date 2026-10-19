const coding = ['js', 'cpp', 'swift', 'ruby', 'python'] 
// coding.forEach( function (lang) {
//     console.log(lang);
    
// })

// coding.forEach((item) => { 
//     console.log(item);
    
// })

function printme (item) {
    console.log(item);
    }

// coding.forEach(printme) // function ka reference hi dena hai bs 

// coding.forEach((index , item , array) => {
//     console.log(index , item , array);
//     })

const mycoding = [
    {
        langName : 'Javascript',
        file : 'js'
    } ,
    {
        langName : 'python',
        file : 'py'
    } ,
    {
        langName : 'C++',
        file : 'cpp'
    } 
]

mycoding.forEach((item) => {
    console.log(`${item.langName} :- ${item.file} `) ;
})