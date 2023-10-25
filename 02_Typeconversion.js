//type conversion in JavaScript

const roll_no=120  // const is constant it is fixed throughout the program whatever i entered 

let age=12 // let is variable it is generally used instead of var

var Name='123a' // var is also used but rarely because of block scope and functional scope 

let  job=null // null means no value

let company= undefined // undefined means value is not defined but variable is exist 

let pass=true // bool datatype output always in true/false

console.log(roll_no,age,Name,job,company)

console.log(typeof(Name));  // string
console.log(typeof(age));   //number
console.log(typeof(job));   //object
console.log(typeof(company)); //undefined
console.log(typeof(pass));    //boolean

newage= String(age) // number into string
console.log(typeof(newage));

newName = Number(Name) // string into number
console.log(newName) // Nan Not a number
console.log(typeof(newName));

newPass = Number(pass) // bool into number
console.log(typeof(newPass))

new_pass = String(pass) //bool into string
console.log(typeof(new_pass));

let on="sandeep"

boolOn=Boolean(on) // int into boolean

console.log(boolOn);