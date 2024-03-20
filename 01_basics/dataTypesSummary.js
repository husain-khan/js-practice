//primitive datatype 

// 7 type :string ,Number,Boolean,Null,Undefined,Bigint,symbol

// const id=symbol('123')
// const diffrentid=symbol('123')
// console.log(id==diffrentid);
//non primitive 

//Array,Objects,Functions

{
    name: "husain";
    age: 21

}

const myFunction=function(){
    console.log("Hello Guys")
}
console.log(typeof myFunction);

//study diffrent type of important like null,undefined,function
 

/***************memory [stack] */

//stack (primitive),Heap (non primiitive )

let myYoutubename ="newCricketTikTok";

let anotherName = myYoutubename
anotherName="husainkhan"
console.log(myYoutubename)
console.log(anotherName)

let user={
    emailId:"husandob@gmail.com"
    
}

let user2=user

user2.emailId="khanhn2@gmail.com"

console.log(user.emailId)
console.log(user2.emailId)

//stack=> primitive=>copy fetched 
//heap => refrence=>same value fetched 