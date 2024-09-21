//var vs let vs const ✅
//scope

// function test() {
//   let a = "hello";

//   if (true) {
//     let a = "hi";
//     console.log(a);
//   }

//   console.log(a);
// }

// test();

// HOISTING ✅

// function abc() {
//     console.log(count);
//     var count=20;
// }

// abc()

// let no =[34,556,32,1]

// let result= no.map((item)=>item*2)

// let filterres= no.filter((item)=>item>10)

// console.log(filterres)

//reduce ---------use 0 for if blanck array
// let val=no.reduce((acc,curr)=>acc+curr,0)
// console.log(val)

// Q1 ✅ student name in upper case.

// let student = [
//   { name: "Arun", rollNo: 23, marks: "96%" },
//   { name: "Jaya", rollNo: 356, marks: "85%" },
//   { name: "Basir", rollNo: 233, marks: "55%" },
// ];

// console.log(student.map((person)=>(person.name).toUpperCase()))

// Q2✅ student who score more then 60% and roll grater then 100

// let res = student.filter((stu) => {
//   stu.marks = +stu.marks.slice(0, 2);

//   if (stu.marks > 60 && stu.rollNo>100) {
//     return stu;
//   }
// });

// console.log(res);

// let student = [
//   { name: "Kapal", rollNo: 20, marks: 10 },
//   { name: "munna", rollNo: 30, marks: 20 },
//   { name: "nidhi", rollNo: 40, marks: 30 },
//   { name: "juna", rollNo: 40, marks: 30 },
// ];

// let sum = 0;
// let sumOfMarks = student.map((item) => {
//   sum += item.marks;
// });

// console.log(sum);

// const items = [
//     { name: 'Apple', price: 2 },
//     { name: 'Orange', price: 2 },
//     { name: 'Mango', price: 3 },
//   ];

//   const totalPrice = items.reduce((accumulator ,item) => {
//       return accumulator + item.price;
//     },0)

//     console.log(totalPrice);

// Q3 ✅ Return only name who score morethen 60

// let student = [
//   { name: "Kapal", rollNo: 20, marks: 10 },
//   { name: "munna", rollNo: 30, marks: 80 },
//   { name: "nidhi", rollNo: 40, marks: 20 },
//   { name: "juna", rollNo: 40, marks: 41 },
// ];

// console.log(student.filter((person)=>person.marks>60).map((e)=>e.name.toUpperCase()))

// Q4 ✅ added 20 marks gress who scored less then 60 and then return the student name and total sum .

// stuName = student
//   .map((stu) => {
//     if (stu.marks < 60) {
//       stu.marks += 20;
//     }
//     return stu;
//   })
//   .filter((e) => e.marks > 60)
//   .reduce((acc, curr) => acc + curr.marks, 0);

// console.log(stuName);

// ✅Function
// first class function

// function square(a) {
//   return a * a;
// }

// function displaySquare(fn) {
//   console.log("first", fn(5));
// }

// displaySquare(square);

// IIFE✅
// (() => console.log(window))();

// (function (x) {
//   return (function (y) {
//     console.log(x)
//   })(2);
// })(1);

// ✅// output based 1
// for (let i = 0; i < 5; i++) {
//    setTimeout(() => {
//         console.log(i)
//    }, i *1000);

// }

//✅ output based 2

// var x=21

// var fun = function () {

//     console.log(x);

//     var x=20;

// }
// fun()

// ✅ rest and spread

// function hello(a, b) {
//   return a * b;
// }
// let x = [2, 2];
// console.log(hello(...x));

// function name(a,x,y,...numbers) {

//     console.log(x,y,numbers)

// }

// name (5,6,7,2,1,5)

// ✅ callback

// function name(a, b) {
//   return a + b;
// }

// function sum(cb) {
//   console.log(cb(4, 6));
// }

// sum(name);

// ✅arrow vs normal func
// ✅Clousure

// function outerFunc() {
//   function innerFunc(x) {
//     return "hello "+x;
//   }

//   return innerFunc;
// }

// let res = outerFunc()(6);

// console.log(res);

// ✅Closure

// function outerScope() {
//   let val = "roadside coder";
//   function innerScope(no) {

// return function (params) {
//   console.log("first")
//   console.log(val + no);
// }
//   }
//   return innerScope;
// }
// let res = outerScope();
// res(5)();
// ------------------imp⏭️
// function creteBase(a) {
//   return function (b) {
//     console.log(a + b);
//   };
// }

// var addSix = creteBase(6);

// addSix(10);
// addSix(21);

// imp⏭️  optimize the code /

// function find() {
//   let a = [];

//   for (let i = 0; i < 100000; i++) {
//     a[i] = i * i;
//   }
//   return function (index) {
//     console.log(a[index]);
//   }
// }

// const closure =find()
// closure(6)
// closure(12)

// ⏭️imp closure with optimize

// function a() {
//   for (var i = 0; i < 3; i++) {
//     var x = function (i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     };
//     x(i);
//   }
// }

// a();

// private variable✅

// moduled pattern✅

// ⏭️run only once

// ✅currying in js

// function f(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// let res = f(4)(5);

// console.log(res);

// ✅currying in js 2

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(2)(3)(6));

// ✅currying in js 3

// function evalute(a) {
//   return function (b) {
//     return function (c) {
//       if (a == "sum") {
//         return b + c;
//       } else if (a == "substract") {
//         return b - c;
//       } else if (a == "multiply") {
//         return b * c;
//       } else if (a == "divide") {
//         return b / c;
//       }
//     };
//   };
// }

// console.log(evalute("sum")(4)(2));
// console.log(evalute("multiply")(4)(2));
// console.log(evalute("divide")(4)(2));
// console.log(evalute("substract")(4)(2));

// ✅infinite currying

// function inf(a) {
//   return function (b) {
//     if (b) return inf(a + b);

//     return a;
//   };
// }

// console.log(inf(1)(2)(3)(4)());

// ✅change content in dom using Currying

// function updateElementText(id) {
//   return function (content) {
//     document.querySelector("#" + id).textContent = content;
//   };
// }

// const updateHeader= updateElementText("heading")

// updateHeader("Subscribe to RoadSideCoder");

// ✅ OBJECT

//  const user={
//   name:"Roadsider Coder",
//   age: 24,
//  };

//  user.age=44

//  console.log(user)

// let func = (a) => {
//   delete a;

//   return a;
// };

// console.log(func(6));

// ---------☑️

// const user = {
//   name: "Roadsider Coder",
//   age: 24,
//   isDoen: true,
// };
// for (let key in user) {
//   console.log(key);
// }

// const obj={
//   a:"one",
//   b:"two",
//   a:"three",
// }

// console.log(obj) // a and b only

// ☑️ IMPORTANT  chage the key value in object using function

// const obj = {
//   a: 100,
//   b: 200,
//   title: "My nums",
// };

// multiplayNumeric(obj);

// function multiplayNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] = obj[key] * 2;
//     }
//   }
// }
// console.log(obj);

// ☑️ QS

// const a={};
// const b={key:"b"};
// const c={key:"c"};

// // break down----

// // a["object object "]=123 // both same so its overlap
// // a["object object "]=456

// a[b]=123;
// a[c]=456;

// console.log(a)

// ☑️ QS json stringify and parse

// const user={
//   name: "Mohit",
//   age: 24,
// }

// let stringJson=JSON.stringify(user)

// let parseJson= JSON.parse(stringJson)
// console.log(stringJson)
// console.log(parseJson)

// EG:

// const settings = {
//   username: "Piyush",
//   level: 18,
//   health: 90,
// };

// console.log(JSON.stringify(settings, ["level", "health"]));

// ☑️  spred object

// let name='Linda'

// console.log([...name])

// console.log(name.split(""))
// ☑️ object nested destrucring
// let user = {
//   name: "Ayan",
//   age: 28,
//   fullname:{
//     firstName:"tapan",
//     lastName:"kumar",
//   }
// };

// const { name, age,fullname:{firstName,lastName} } = user;

// console.log(firstName);

// ☑️ VERY IMPORTANT OBJECT REFERENCING 18.07 minutes

// let c={greeting:"Hey!"};
// let d;

// d=c

// c.greeting="hello"

// console.log(d.greeting) //both hello

// ☑️ output false both

// console.log({a:1}=={a:1})
// console.log({a:1}==={a:1});

// ☑️

// let person ={name:'lynda'};
// const members=[person];

// person =null

// console.log(members) //its save the ref of real perosn to members

// ✅eg

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply();
// multiply();
// multiply(value);
// multiply(value);

// ✅deep copy shalow copy


// // Original object
// const originalObj = {
//   name: "Ayan",
//   address: {
//     city: "Dinhata",
//     state: "West Bengal"
//   }
// };

// // Shallow copy using Object.assign() or spread operator
// const shallowCopy = { ...originalObj };

// // Modify the shallow copy
// shallowCopy.address.city = "Kolkata";

// // Both objects will have the modified city
// console.log(originalObj.address.city); // Output: "Kolkata"
// console.log(shallowCopy.address.city); // Output: "Kolkata"

// // Original object
// const originalObj = {
//   name: "Ayan",
//   address: {
//     city: "Dinhata",
//     state: "West Bengal"
//   }
// };

// // Deep copy using JSON methods
// const deepCopy = JSON.parse(JSON.stringify(originalObj));

// // Modify the deep copy
// deepCopy.address.city = "Kolkata";

// // Only the deep copy is modified, the original remains the same
// console.log(originalObj.address.city); // Output: "Dinhata"
// console.log(deepCopy.address.city);    // Output: "Kolkata"
