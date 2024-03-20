var name ="husain"
const repoCount =50

console.log(name+repoCount);
//not recommended old 

/***new way */

//string interpolation

console.log('hello my name is ${name} and my repository count is ${repoCount}');
console.log(name)

const gameName= new String('Husain')

console.log(gameName.__proto__);
//string is key pair object not array

// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('i'));
// //explore string method in console /*important */



const newString =gameName.substring(0,4);
console.log(newString)

const anotherString=gameName.slice(-5,4)
console.log(anotherString)

const newStringOne=" hitesh "
console.log(newStringOne)
console.log(newStringOne.trim());

let url="https://husain.com/husain%20khan"


console.log(url.replace('%20','-'));    
console.log(url.includes('husai'))

console.log(url.split('.'))//split on basis of dash"-""

//most power full data type string 