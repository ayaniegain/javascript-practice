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







































































































class Person {

    constructor(name,age) {

        this.name=name;
        this.age=age

    }

    canrun(){
        console.log(`hello  i am ${this.name} my age is ${this.age}`);
    }
 
}

let value1= new Person("ayan",23)

value1.canrun()

console.log(value1);
