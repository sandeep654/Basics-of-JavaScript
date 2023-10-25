// two of datatypes are 
//1. Primitive datatype 
// 7 types of primitive datatypes are (String , Number , Boolean , Null , undefined , symbol , BigInt)

console.log("Sandeep")
console.log(123+121);
let isithot = true;
let outsidetemp= null;
let Emailid;  //emailid = undefined ;
console.log();

// Symbol 
const id = Symbol("Yadav")
const Nextid = Symbol("Yadav")
console.log(id === Nextid);  // symbol are always unique .generally used in front end framework reactjs 

//typescript is nothing just rules for writing javascript 

const x=1020203003n ///BigINT


//2. Reference or non primitive datatype
// Object , array , functions
 // object 
let obj={
    color:"red",
    friend:"pankaj",
    car:"black-scorpio"
}

// array 
let arr=["hello" , "friends" , "i am sandeep" ,"Happy to see "]

//function
function f1(){
    console.log("hello sandeep this is function")
}

console.log(typeof arr)
console.log(typeof obj);


/*********************************************************************/

// Stack (Primitive )  , Heap ( non - primitive type) reference milta h 

let Age=25
let newAge=Age
newAge=31
console.log(newAge,Age);

let obj1={
    graduation:"B.tech",
    car:"Scopio",
    Age:56
}

let obj2=obj1
obj2.Age=25
console.log(obj1.car , obj1.Age);

