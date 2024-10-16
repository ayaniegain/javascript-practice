// ------JS EXCEPTION--------
// console.log(+[]==+![])
// console.log(0.1+0.2===0.3)
// console.log( null>=0)
// console.log(Number([]))
// console.log([10,1,3].sort())

//  ✅--------VARIABLES

// let fruits="mango";
// let vegetable="carrots";
// let bucket;

// bucket=fruits;
// fruits=vegetable;
// vegetable=bucket

// console.log(fruits)
// console.log(vegetable)

// FUNCTION☑️
// -decliration
// function printThis(params) {
//   console.log(params);
// }

// printThis("hello");

// expresstion

// let hello = function () {
//   console.log("he");
// };

// hello();

//return value

// let sumValue=function(a,b){
//     return a+b;
// }

// let res= sumValue(40,34);

// console.log(res)

// rest parameters

// function restParams(a, ...b) {
//   console.log(a);
//   console.log(b);
// }

// restParams(38, 56, 13, 34, 55, 14, 11, 90, 1);

// var res=(x,y)=>x+y
// console.log(res(5,6))

// Nested function ☑️

// function Outer() {
//   console.log("Outer");
//   function Inner() {
//     console.log("Inner");
//   }
//   Inner();
// }
// Outer();

// Closure☑️

// function Outer(x) {
//   function Inner(y) {
//     return x + y;
//   }
//   return Inner;
// }

// let res = Outer(7)(9);

// console.log(res);

// CallBack☑️

//sell the ticket based on the condition ,
// condition 1: should be male;
// condition 2: should be 18+

// let name = document.querySelector(".name");
// let age = document.querySelector(".age");
// let clickBtn = document.querySelector(".btn");
// let myDec = document.querySelector(".dec");

// function checkNameLength() {
//   if (name.value.length > 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function myage() {
//   if (age.value > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function sellMyMovieTicket() {
//   if (checkNameLength() && myage()) {
//     myDec.innerHTML = `my name is ${name.value}, I  am ${age.value} yers old, I am eligible to sell the ticket`;
//   } else {
//     myDec.innerHTML = `Not eligible to sell the ticket`;
//   }
// }

//   clickBtn.addEventListener('click', sellMyMovieTicket);

// HOC☑️
// function multiplyBy(multiplier) {
//   return function (value) {
//     return value * multiplier;
//   };
// }

// const double = multiplyBy(2)(6);
// console.log(double);

//☑️ Example Combining Both Concepts

// function first(a,b,cb) {

//  return cb(a,b)

// }

// function sum(a,b) {

//   return a+b

// }

// console.log(first(6,7,sum))

// ☑️Pure & Impure function

// let value=23

// function name(x) {
//   console.log(value+x)
// }

// name(34)
// name(24)
// name(24)

// ☑️ IIFE

// (()=>{

//   console.log("first")

// })()

// ☑️Call stack LIFO

// function firstFunction() {
//   console.log('Entering firstFunction');
//   secondFunction();
//   console.log('Exiting firstFunction');
// }

// function secondFunction() {
//   console.log('Entering secondFunction');
//   thirdFunction();
//   console.log('Exiting secondFunction');
// }

// function thirdFunction() {
//   console.log('Inside thirdFunction');
// }

// firstFunction();

// ☑️Recursion

// function name(no) {
//   if (no === 0) {
//     console.log(`no value found`);
//     return;
//   }
//   console.log(`value is ${no}`);
//   name(no - 1);
// }
// name(5);

// ☑️ OBJECT COPY VS CLONE

// let personDetails1={
//   name:"Ayan Biswas",
//   age:24,
//   address:"kolkata"
// }

// let personDetails2={
//   name:"Rohim Biswas",
//   age:14,
//   address:"Dhaka"
// }

// copyPersonDetails={...personDetails2}

// personDetails1.age=34
// copyPersonDetails.age=64

// console.log(personDetails1)
// console.log(copyPersonDetails)

// console.log({"name":"ayan"}=={"name":"ayan"})

// ☑️Nullish operator

// console.log(null ?? 'no response') // if  null or undefined then get the next message

// ☑️optional chaining // .?

// ☑️ SCOPE

// for (var i = 0; i < 15; i++) { // var global scope

//   console.log(i)

// }

// console.log(i)

// -------- access BLOCK SCOPE 🆗
// {
//   var a=77

//   console.log(a)
// }
// console.log(a)

// --------function access BLOCK SCOPE 🆗

// function f1() {
//   var age=23;
// }

// f1()

// console.log(age) // not accesable

// ☑️Reassignment

// for Object it can be possible but not for primitive data type

//☑️ access a variable before declaring

// no=78

// console.log(no)
// var no

// ☑️ call back function exercis

// function processData(str, CB) {
//   return CB(str);
// }

// function convartToUpper(val) {
//   return val.toUpperCase();
// }

// function convartToLower(val) {
//   return val.toLowerCase();
// }

// let res = processData("Hello World", convartToLower);

// console.log(res);

// function processArray(arr, CB, inc) {
    
//     let finalArray = [];
//   for (const i of arr) {
//     finalArray.push(i * inc);
//   }

//   return CB(finalArray);
// }

// function mulArray(arr) {
//   return arr;
// }

// let res = processArray([12, 45, 66, 87], mulArray, 2);

// console.log(res)

// ✅Object and more immutabality


const user={
    name:"ayan",
    age:27,
    is_Married: false
}


user['address']="kolkata";

console.log(user)

console.log(Object.isExtensible(user))