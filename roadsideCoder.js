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

// let node=document.getElementsByTagName("h2")[0]

//     let para = document.createElement("p")
//     node.appendChild(para)

// let nums=[1,2,3,5]

// let multiplied = nums.map(val => val * 5);

// multiplied.map((val)=>{
//     let textNode = document.createTextNode(val  + " ");
//     para.appendChild(textNode);

// }
// )
// ------pratice
/*
function square(num) {

    return num *num
    
}

function displayfunction(fn) {

        console.log("square is" ,fn(5))
    
}

displayfunction(square)
*/

// IIFE
// (
//     ()=>{
//         console.log("hello")
//     }
// )()

// for (let i = 0; i < 6; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

//normal function vs arrow function

// let user={
//  val:29,

//  hello1:()=> console.log(this.val),
//  hello2() {
//     console.log(this.val)
//     }
// }

// user.hello1()
// user.hello2()

//closure

// function subxribed() {
// let count=0

// return function res() {

//     if (count>0) {
//         console.log("already subcribed")
//     }else{
//         console.log("subscriber to channel")
//         count++
//     }
// }

// }

// let res=subxribed()
// res()
// res()
// res()

// currying

// function curr(a) {
//     return function (b) {
//         console.log(a+b)
//     }
// }

// (curr(2)(3))

// infinite currying

// function add(a) {
//     return function(b){
//             if (b) {
//                 return add(a+b)
//             }
//             return a;
//     }
// }

// console.log(add(6)(8)(6)())

// ========OBJECT======

// const property="firstName"
// const name="Ayan"

// const user={
//     [property]: name
// }

// // user["property"]=name

// console.log(user.firstName)

// let User={
//     name:"Roeadside coder",
//     age:24,
//     istotallyAwesome:true
// }

// for (const key in User) {
//         const element =key
//         console.log(element)

// }
//////multiplay number value *2
// let nums = {
//   a: 100,
//   b: 200,
//   title: "My nums",
// };

// function multiplyNumberic(nums) {
//   for (const key in nums) {
//     if (typeof nums[key] == "number") {
//       nums[key] = nums[key] * 2;
//     }
//   }
// }

// multiplyNumberic(nums);
// console.log(nums);

// what is the output

// const a={};
// const b={key:"b"};
// const c={key:"c"};

// a[b]=123;
// a[c]=456; //answer 456

// a["[object,object]"]=123
// a["[object,object]"]=456

//JSON parse and StringyFy  use case for local storage/
// let user={
//     name:"Piyush",
//     age:24
// }

// let parseValue=(JSON.stringify(user))
// console.log(JSON.parse(parseValue))

// Q1
// let arry="harry"
// console.log([...arry])
// Q2
// const settings={
//     username:"Piyush",
//     level:19,
//     health:90,
// };

// const data= JSON.stringify(settings,["level","health"])

// console.log(data)

// oject reference

// let c={greeting:"Hey"};
// let d;

// d=c;

// d.greeting="helo"

// console.log(Object.assign({},c))

// c.greeting="hello";
// console.log(c)
// console.log(d)

// this.myvalue=6;
// console.log(this)

// let calculator = {
//   read() {
//     this.a = +(prompt("a:", 0));
//     this.b = +(prompt("b:", 0));
//   },
//   sum() {
//     console.log("the sum is", this.a + this.b);
//   },
//   mul() {
//     console.log("the multiply is", this.a * this.b);
//   },
// };

// calculator.read();

// console.log(calculator.sum());
// console.log(calculator.mul());

// var length =4;

// function callback() {

//     console.log(this.length);

// }
// const object={
//     length:5,
//     method(){
//         arguments[0]();
//     }
// }

// object.method(callback,2,3)

// const calc = {
//   add(a) {},
//   multiply() {},
//   subs() {},

//   total() {
//     console.log(this.add);
//   },
// };

// const result = calc.add(10).multiply(20).subs(10);

// console.log(result.total);

// let number=[10,1,4,6,3,9]

// let maxnumber= Math.max.apply(null,number)

// console.log(maxnumber)


//calbackhell
// console.log("start");

// function importantAction(name,cb) {
//   setTimeout(() => {
//    cb(name)
//   }, 1000);
// }
// let msg = importantAction("hello coder",function (message) {
//     console.log(message);
    
// });

// console.log("stop");


// Promises ✅


