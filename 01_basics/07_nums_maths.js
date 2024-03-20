const score =400
console.log(score);

const balance =new Number(100)
console.log(balance)
//number only
console.log(balance.toString().length)

console.log(balance.toFixed(2));//precision value upto to decimal

const otherNumber=123.9947
console.log(otherNumber.toPrecision(3));

const hundread=100000
console.log(hundread.toLocaleString('en-IN'))

/**************Maths***************/

console.log(Math);//serch in console

console.log(Math.abs(-4))
console.log(Math.round(5.6))


console.log(Math.random());//will give only the random value from 0 to 1
console.log(Math.floor(33.455));//convert to largest integer 
//to avoid 0 entry + 1
//**important */
//to find random from given range 
const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min)