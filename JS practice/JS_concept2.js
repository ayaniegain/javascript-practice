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



let name = document.querySelector(".name");
let age = document.querySelector(".age");
let clickBtn = document.querySelector(".btn");
let myDec = document.querySelector(".dec");




function checkNameLength() {
  if (name.value.length > 3) {
    return true;
  } else {
    return false;
  }
}

function myage() {
  if (age.value > 18) {
    return true;
  } else {
    return false;
  }
}


function sellMyMovieTicket() {
  if (checkNameLength() && myage()) {
    myDec.innerHTML = `my name is ${name.value}, I  am ${age.value} yers old, I am eligible to sell the ticket`;
  } else {
    myDec.innerHTML = `Not eligible to sell the ticket`;
  }
}


function showValue() {
  
  clickBtn.addEventListener('click', sellMyMovieTicket());
}

showValue()


  