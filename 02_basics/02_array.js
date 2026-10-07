const Marvel = ["thor", 'Ironman' , 'spiderman']
const DC = ["Superman", 'aquaman' , 'wonderwoman'] 

// Marvel.push(DC)  // not suggested 
// console.log(Marvel);

// const allHeros = Marvel.concat(DC) ;
// console.log(allHeros) ;

// Spread Method
const allNewHeros = [...Marvel, ...DC] 
console.log(allNewHeros);

// Flat function 
const gndaArr = [1,2,3,[4,5],6,7,[8,9,[10,11,12],13],14] ;
const achaArr = gndaArr.flat(Infinity) ;
console.log(achaArr) ;


console.log(Array.isArray("Mehul")); 
console.log(Array.from("Mehul")); 
console.log(Array.from({name : "Mehul"}));  // Interesting.......returns [] 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); 



