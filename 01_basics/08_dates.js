//from date jan 1 1970
//they will declear globat object like Maths soon....
//eg:- Temporal.now.instant()//praposal

//Dates
let myDates =new Date()
console.log(myDates.toString());

console.log(myDates.toDateString());
console.log(myDates.toLocaleDateString());
console.log(typeof(myDates));

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date("2023-01-15")
console.log(myCreatedDate2.toDateString());


let myTimeStamp = Date.now()
//abhi tak ka jitna hoga pura mili second me dega 
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));//for comparision 


let newDate =new Date()

console.log(newDate)
console.log(newDate.getDay());
console.log(newDate.getFullYear());

//**important  */

newDate.toLocaleString('defalult',{
    hourCycle:19
    //press ctrl+space
})