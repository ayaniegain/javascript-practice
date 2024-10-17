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

// ☑️ call back function exercise

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

// const user = {
//   name: "ayan",
//   age: 27,
//   is_Married: false,
//   has_Car: {
//     car_name: "BMW",
//     price: 2300,
//   },
// };

// //check mutable or not
// console.log(Object.isExtensible(user))

// //prevent mutablity
// Object.preventExtensions(user)
// user['address']="kolkata";

// // ----SEAL______ can't create or delte, only update

// Object.seal(user);

// delete user['name']

// user['name']='ratan'

// // ----FREEZE______ can't do any operation not work for nested object

// Object.freeze(user);
// user['name']='ratan3' //cn't do

// check frozen

// console.log(Object.isFrozen(user));
// user.has_Car.car_name="AUDI" //can change the nested property

// console.log(user)

// ✅ nested freeze (DeepFreeze)

// const deepFreeze = (obj) => {
//   Object.keys(obj).forEach((key) => {
//     if (typeof obj[key] === "object") {
//       deepFreeze(obj[key]);
//     }
//   });

//   Object.freeze(obj);
// };

// deepFreeze(user);

// user.has_Car.car_name = "AUDI"; //can not change the nested property in deep freeze

// // console.log(user)
// ✅ ARRAY Freeze
// let val=[56,34,66,21]

// Object.freeze(val)
// val.push(78)

// console.log(val)

// ☑️ split join

// let str="my name? is .ayan ! biswas"

// // let arr=str.split(' ',2)
// // console.log(arr)
// // console.log(''.split( ""))

// // ---remove the spl character

// // let rmvSpl=str.split(/[".,!,?"]/)

// let name= "Ayan Biswas";
// let subs= name.split(" ");
// let joined=subs.join(' ') //using join arry to string

// console.log(joined)

// ☑️ Marge multiple array in different methode.

// let arr1=[12,34,55,21];
// let arr2=[2,4,5,1];
// let str=["Ayan"]

// // spread

// let spredArray=[...arr1,...arr2,...str]

// let concatArray=[].concat(arr1,arr2,str)
// let pushArray=arr1.push(...arr2)

// // console.log(spredArray)
// // console.log(concatArray)
// console.log(pushArray)

// ☑️Object destructuring

// const person = {
//   name: "John Doe",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     country: "USA",
//     postalCode: "10001",
//   },
//   hobbies: ["reading", "traveling", "sports"],
//   education: {
//     highSchool: {
//       name: "Central High",
//       yearGraduated: 2010,
//     },
//   },
// };

// ---destructung
// const {education:{highSchool:{name}} }=person

// console.log(name)

// ------dynamic get value 🆗

// function getDynamicValue(key) {
//   const { [key]: returnValue } = person;

//   return returnValue;
// }

// let name = getDynamicValue("name");
// let age = getDynamicValue("age");

// console.log(name, age);

// 🆗 destructring in params
// 🆗 destructring in function
// 🆗using destrucring itreatate the value
// const carDetails = [
//   {
//     name: "Alice",
//     age: 22,
//     course: "Computer Science",
//     enrolled: true,
//   },
//   {
//     name: "Bob",
//     age: 24,
//     course: "Computer App",
//     enrolled: false,
//   },
// ];

// for (let {name,age}of carDetails){
//     console.log(name,age)
// }

// const [arr1,arr2]=carDetails;

// console.log(arr1.enrolled)
// console.log(arr2);

// ☑️---------Asynchronous Programming---
// call stack browser API

// --> not occuring at the same time
// --> can br occuring for browser API like, setTimeout,setInterval,click, mouse over etc

// function f1() {
//     console.log("f1")
// }

// function f2() {
//     console.log("f2")

// }

// function main() {
//     console.log("main")

//     setTimeout(f1,0)

//     f2()

// }

// main()

// ☑️Promises
// job queue / micro task queue

// function f1() {
//     console.log("f1")
// }

// function f2() {
//     console.log("f2")

// }

// function main() {
//     console.log("main")

//     setTimeout(f1,0)

//     new Promise((resolve,reject)=>{

//         resolve("the promise fullfilled")

//     }).then((result)=>console.log(result))

//     f2()

// }

// main()

// callback----🆗

// function shallIbuyGame(cb) {
//   let myMoney = 2;

//   return cb(myMoney);
// }

// function rupees(money) {
//   if (money >= 10) {
//     return "yes i can get game ";
//   } else {
//     return "no i can not get game";
//   }
// }

// let res = shallIbuyGame(rupees);

// console.log(res);

// sample promise example-------🆗

// let promise = new Promise((resolve, reject) => {
//   let myMoney = 2;

//   if (myMoney>=10) {
//     resolve("yes i can get game ");

// } else {
//     reject("no i can not get game");
// }
// });

// function shallIbuyGame() {
//   return  promise
//     .then((statement) =>statement)
//     .catch((error) =>error);
// }

//  shallIbuyGame().then((e)=>console.log(e))

//-------- async await based api call--------- 🆗

// async function fetchApi() {

//     try {
//        let response= await fetch(" https://jsonplaceholder.typicode.com/todos/1");
//        let data=await response.json();
//         return  data;
//     //    console.log(data)

//     } catch (error) {
//         console.log(error)
//     }

// }

// fetchApi().then((e)=>console.log(e))

// (async()=>{

//     let res=await fetchApi()
//     console.log(res)

// })()

// ☑️---------promise based api call---------

// let promise= new Promise((res,rej)=>{

//     setTimeout(() => {

//         fetch("https://jsonplaceholder.typicode.com/todos/1")
//         .then((e)=>e.json())
//         .then((data)=>res(data))
//         .catch((error)=>rej(error))

//     }, 1000);

// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })

// -----Promise Chain--------

// let promise = new Promise((resolve, reject) => {
//   let myMoney = 2;

//   myMoney>=1? resolve(myMoney): reject("no money no honey")
// });

// function shallIbuyGame() {
//   promise
//     .then((a) =>a+20)
//     .then((b) =>b+30)
//     .then((c) =>console.log(c))
//     .catch((error) =>console.log(error))
// }

//  shallIbuyGame()

//❤️ -----Async Await with promises--------

// function validateUser({ username, password }) {
//   return new Promise((resolve, reject) => {
//     if (username && password) {
//       resolve(`hello my name is ${username}`);
//     } else {
//       reject("Invalid user");
//     }
//   });
// }

// const app = async () => {
//   const data = {
//     username: "test",
//     password: "test",
//   };

//   try {
//     let res = await validateUser(data);

//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };

// app();


