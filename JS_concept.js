// IIFE
// (function () {
//    console.log("hello");

//  })()

//promise
// let res= new Promise((resolve,reject)=>{
//   if (resolve) {
//     resolve ("success");
//   }

// })
// res.then((e)=>{
// console.log(e);
// }

// ).catch((e)=>{
//   console.log(e);
// }

// )

// fetch api call

// function apicall() {
//  let res=   fetch('https://randomuser.me/api/')
//    res.then((e)=>{
//       return e.json()
//     })
//     .then((e)=>{
//         console.log(e);
//     })
//     .catch((e)=>{
//         console.log(e);
//     })

//     // console.log(res);
// }

// apicall()

// with try catch
// try {
// } catch (error) {}

// function apicall() {
//   try {
//     let res = fetch("https://randomuser.me/api/");
//     res
//       .then((e) => {
//         return e.json();
//       })
//       .then((e) => {
//         console.log(e);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// }

// apicall();

 //callback

//  function outer(a,callback) {

//      callback()
//      console.log(a+b);

    
//  }


//  function inner() {

//     return b=4
// }
// outer(2,inner)

//closoure

// let val=28
// function outer() {
//   return function inner() {
//     //  val=3 

//      return val


        
//     }
// }

// let result=outer()

// let res=result()

// console.log(res);


// call apply bind 

// //call
// function greet(name) {
// console.log(`this is ${name} my ${this.title}`);
    
// }
// const context={title:'hello'};

// greet.call(context,'User')

// //apply

// function greet2(name) {
// console.log(`this is ${name} my ${this.title}`);
    
// }
// const context2={title:'hello'};

// greet2.apply(context2,["User2"])

// //bind

// class

// hoisting

// 👍 when any of the function and value move top of their exection scopre during compailization phase, basically var and normal function can be hoisted , and function declaration and let can;t .

// b=34

// console.log(b);

// var b

// HoistFunc()
// function HoistFunc() {
//     console.log(110);
// }

//closure

// 👍A closure is the combination of a function and the lexical environment, when innerfunction access the outer function value even the outer function has finished their exection its call closure

// function Outer(){
// let value= 20
//     function Inner() {

//         let value =10

//         console.log(value);
        
//     }
//     return Inner

// }

// let result= Outer()
// result()

// Event loop
// the event loop is the mechanisam of the asyncronus operation , whic check the non bloxking code in the event queue whether its free of not <div className="



// let myPromise= new Promise((resolved,reject)=>{

//     let toggle =false

//     if (toggle) {
//         resolved("slidebar toggle ")
//     }else{
//         reject("slidebar does't toggle ")

//     }

// })
// myPromise.then((data)=>console.log(data)).catch((error)=>console.log(error))



// let url ="https://randomuser.me/api/"

// let MyPromise= new Promise((resolve,reject)=>{
      
//     fetch(url)
//       .then(response => {
//         // Check if the response status is ok (status code 200-299)
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         // Parse the response as JSON
//         return response.json();
//       })
//       .then(data => {
//         // Resolve the promise with the JSON data
//         resolve(data);
//       })
//       .catch(error => {
//         // Reject the promise with the error
//         reject(error);
//       });
// })

// MyPromise.then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
// arrow vs normal function  👍 this and new keyword
// function hello(){
//     // console.log(this);
// }
// hello()

// let  hello1=()=>{
//     console.log(this);
// }
// hello1()

// 👍



// class Person {

//     constructor(name,age) {

//         this.name=name;
//         this.age=age

//     }

//     canrun(){
//         console.log(`hello  i am ${this.name} my age is ${this.age}`);
//     }
 
// }

// let value1= new Person("ayan",23)

// value1.canrun()

// console.log(value1);



























































































