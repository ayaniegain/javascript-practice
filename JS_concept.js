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
