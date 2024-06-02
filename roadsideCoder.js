//1 scope //var,let ,const 👍

// function scope(){

// var val =40

// {
//     let val=50
//     console.log(val);
// }

// console.log(val);

// }
// scope()


//2 decliration without initialisation 👍
//3 hoisting👍
// when javascript executed ;variable and function declired on top of their scope .

// let a =10;

// console.log(a);

// {

//     console.log(a);
//     let a=20
// }

//4 temporal dead zone 👍
// variable  in the scope but not declired yet

// function temp() {
//   console.log(a, b);
//   let a = 8;
//   let b = 8;
// }

// temp();

// let arr=[2,55,6,32,44,61,2]

// let el=arr.filter((e)=>e>10)

// console.log(el)

// let arr1= arr.reduce((acc,curr,i,ar)=>{
//     return acc+curr
// },0)

// console.log(arr1);

// custom polyfil in map 👍

// Array.prototype.myMap=function (callback) {
//     var arr=[]
//     for (let i = 0; i < this.length; i++) {

//         arr.push(callback(this[i],i,this))

//     }
//     return arr

// }
// // declare an array
// const arr = [10,20,30,40];
// // call custom map() on array to square each element or perform any other operation
// const squaredArray = arr.myMap((i) => i * i);
// // prints [100,400,900,1600]
// console.log(squaredArray);

// polyfil for filter 👍

// Array.prototype.MyFilter = function (callback) {
//   let arr = [];

//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], this, i)) {
//       // array.push(callback(this[i],this,i))
//       arr.push(callback(this[i], i, this));
//     }
//   }
//   return arr;
// };

// let filterArray = [23, 77, 45, 21, 90];

// let newArray = filterArray.MyFilter((e) => {
//   let val = e > 20;
//   return val;
// });

// console.log(newArray);

//function expression function declaration and First Class function 👍

// let firstfunc = (a) => {
//   return (a = a * a);
// };

// let mainfunc = (cb) => {
//   console.log(`the sum is ${cb(6)}`);
// };

// mainfunc(firstfunc);

// IIFE👍

// (()=>{
// console.log("hello");
// })()

// var x=21

// let hello=()=> {
//     console.log(x);

//     var x=20
// }

// hello()

//rest paramenet and spread parameter 👍
// callback

//  function name(a,...b) {

//     // console.log(b);

//  }
//  name(12,45,78)

// const [a,...c]=[12,34,56]

// console.log(c);

// callback 👍

// function showValue(cp) {
//   console.log(cp);
// }

// function sumfunc(a, b) {
//   return a + b;
// }

// showValue(sumfunc(4, 6));

//implicit retuen function in arrow function 👍

// let user1 = {
//   name: "ayan",
//   work: function (val, val2) {
//     console.log(` ${this.name} can walk ${val}/hr`);
//   },
// };

// let user2 = {
//   name: "arun",
// };

// user1.work.call(user2, 30);
// // user1.work.apply(user2,[40,32])

// let storeval = user1.work.bind(user2, 30);

// storeval();

//lexical scope and closures 👍

// let value = 2;
// function outerDisplayName() {
//   let value = 3;

//   function innerDisplayName(no) {
//     console.log(value+no);
//   }

//   return innerDisplayName;
// }

// outerDisplayName()(7);

// -----output based 👍

// function createBase(b) {
//   return ((a) => {
//     console.log(a + b);
//   });
// }

// var addsix = createBase(6);
// addsix(10);
// addsix(21);

// -----output based 👍

// function find() {
//   let a = [];
//   for (let i = 0; i < 100000; i++) {
//     a[i] = i * i;
//   }

//   return function (index) {
//     console.log(a[index]);
//   };
// }

// const closure = find();

// closure(6);

// -----output based 👍

// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }

//   inner(i);
// }

// -----output based 👍 private counter

// function counter() {
//   var _count=0

// }

// console.log(_count);

// counter()

//module pattern read leter 👍👍

//memoizing function

//currying example 👍

// function f(a) {
//   return function (b) {
//     return function (c) {
//       return `${a}${b}${c}`;
//     };
//   };
// }

// console.log(f(3)(5)(6));

//Currying in javascript QS1 sum(2)(6)(1) 👍

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// let res = sum(2)(6)(1);

// console.log(res);

// question 2 👍

// function evelute(val) {
//   return function (a) {
//     return function (b) {
//       if (val == "sum") {
//         return a + b;
//       } else if (val == "multiply") {
//         return a * b;
//       } else if (val == "divide") {
//         return a / b;
//       } else if (val == "sub") {
//         return a - b;
//       }
//     };
//   };
// }

// let res = evelute("sub")(4)(3);

// console.log(res);

// infinite currying👍

// function sum(a) {
//   return function (b) {
//     if (b) return sum(a + b);
//     return a;
//   };
// }
// let res = sum(1)(2)(3)(6)();

// console.log(res);

// Curring vs partial Aplication 👍

// function partialCurrying(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// let res = partialCurrying(2);

// console.log(res(4, 3));


// function hello() {

   

//     let str=["hello" ,"i love you"]
//     str1=str.pop()
//     return str1
    
// }
// console.log(hello())


// -------------XX 😁

// var value= 'hello'
// function product() {
//      value=`${value} + hi`

//     console.log(value)
    
// }
// product()

// let no=388
//  no=88

// console.log(no)


// console.log(count1,count2,count3)

// var count1 =2
// let count2 =4
// const count3 =5

let node=document.getElementsByTagName("h2")[0]


    
    
    let para = document.createElement("p")
    node.appendChild(para)




let nums=[1,2,3,5]

let multiplied = nums.map(val => val * 5);

multiplied.map((val)=>{
    let textNode = document.createTextNode(val  + " ");
    para.appendChild(textNode);
    
    
    
    
}
)