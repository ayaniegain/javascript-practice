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

