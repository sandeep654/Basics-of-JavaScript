let Num= new Number(10.45)
console.log(Num);
console.log(Num.toFixed(3));  // point ke baad ki value fix kr deti h 
console.log(Num.toPrecision(4)); // precise number degaa
console.log(Num.toLocaleString()); // convert number into string 
console.log(Num.toExponential(2));



// --------*******************Math******************------------------------------------

console.log(Math)
console.log(Math.max(2,3,5,4,1));
console.log(Math.min(5,89,6,34,12));
console.log(Math.floor(12.345));
console.log(Math.ceil(12.678));
console.log(Math.round(12.478));


console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max - min +1))+min);



