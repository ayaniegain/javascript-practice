// // small possitive missing number 👀

// let Arr= [7,-4,3,1,2,6,9,-3]
// function smallposMisstingNo(array) {
//     const numbersSet = new Set(array);
//   let leastPositiveNumber = 1;

//   while(numbersSet.has(leastPositiveNumber)) {
//     leastPositiveNumber++;
//   }
//   return leastPositiveNumber;
// }
// let value=smallposMisstingNo(Arr)
// console.log(value)

// --------> no even or odd 👀

/**
 
function OddorEven(val) {
    if (val%2==0) {
        return "Even NO"
    }else{
        return "Odd NO"
        
    }
    
}
let result=OddorEven(0)
console.log(result)
*/

// 3> factorial of a given no
// n! = n × (n - 1)!

// 7!=7*6*5*4*3*2*1

// function fetchData() {
//     return new Promise((resolve, reject) => {
//       // Simulating an asynchronous operation (e.g., fetching data from a server)
//       setTimeout(() => {
//         const data = { id: 1, name: 'John Doe', age: 30 };
//         // Assume the operation was successful, so we resolve the promise with the data
//         resolve(data);
//         // If there was an error, we can reject the promise instead
//         // reject(new Error('Failed to fetch data.'));
//       }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
//     });
//   }

//   // Using the promise
//   fetchData()
//     .then((data) => {
//       console.log('Data:', data);
//     })
//     .catch((error) => {
//       console.error('Error:', error.message);
//     });

// value =20

// name()
// function name() {
//     var value = 10
//     console.log(value)

// }

// function abc(a){
//    return function (b){
//         return a+b
//     }
// }
// let result=abc(3)(4)
// console.log(result)

// function outer() {
//     let outerVariable=10
// function inner() {
//     console.log("outerVariable",outerVariable)

// }
// return inner
// }
// const finalf=outer()

// finalf()

// function outerFunction() {
//     let outerVariable = 10;

//     function innerFunction() {
//       // The innerFunction has access to the outerVariable
//       console.log("Outer variable:", outerVariable);
//     }

//     return innerFunction;
//   }

//   const closureFunction = outerFunction();

//   // Even after the outerFunction has completed, the closureFunction can still access the outerVariable
//   closureFunction(); // Output: "Outer variable: 10"

///promise

// let ans=new Promise((res,rej)=>{
//     if (true) {
//          return res()
//         }
//         else{
//             return rej()

//     }
// })

// ans.then(()=>{
//     console.log("resolved")
// })
// ans.catch(()=>{
//     console.log("rejected")

// })

//fetch

// let  callUrl=async()=>{
//    let rawdata= await fetch("https://fakestoreapi.com/products")
//    let data=await rawdata.json()
//    console.log(data)
// }
// callUrl()

// hoisting
// a=5
// console.log(a)
// var a

// program to display value
// console.log(a);
// var a = 5;

// let num = 5; // এটি একটি সংখ্যা
// let str = num ; // এখানে সংখ্যাটি স্ট্রিংয়ে প্রকাশ করতে হয়েছে যা টাইপ কোয়ার্সনের মাধ্যমে ঘটছে

// console.log(typeof(str))

//find the exact output 👀

let x = [
  { name: "a", gender: "m" },
  { name: "b", gender: "m" },
  { name: "c", gender: "f" },
  { name: "d", gender: "m" },
  { name: "e", gender: "f" },
];

let male = [];
let female = [];

x.filter((e) => {
  if (e["gender"] == "m") {
    male.push(e);
  }
  if (e["gender"] == "f") {
    female.push(e);
  }
});

let allCandidate = { m: male, f: female };

// let maleCan=Object.assign(male)
// let femaleCan=Object.assign(female)
// console.log(allCandidate)

// console.log(male)
// console.log(female)

// Group the data based on the “gender” field using ES-6.
// Expected Output: {
// “m”: [
// {name: “a”, gender: “m”},
// {name: “b”, gender: “m”},
// {name: “d”, gender: “m”}
// ],
// “f”: [
// {name: “c”, gender: “f”},
// {name: “e”, gender: “f”}
// ]
// }

// swap array value in perticular possition 👀

// swap two number

// let a=5
// let b=4

// a=a+b//9

// b=a-b//5
// a=(a-b)//4

// console.log(a)
// console.log(b)

// -------------->odd even
// let no =2
// function isEvenorOdd() {
//     if (no%2==0) {
//         return "even"

//     }else{
//         return "odd"
//     }

// }
// let result=isEvenorOdd()
// console.log(result)

// ---------------> factorial

// 6 =6*5*4*3*2*1
// let no =6
//     let fac

//     for (let i = 2; i <6 ; i++) {
//         return i
//     }
//     console.log(i)
// }

// console.log(res)

//     let no=-1
// function factorial() {
//     let res=1
//     if (no==0 || no==1) {
//         return 1

//     }else if(no<0){
//         return 0
//     }
//     else{

//         for (let i = 2; i < no+1; i++) {
//             res=res*i

//         }
//     }
//     return res
// }
// let result=factorial()

// console.log(result)

// let val1=5
// let val2=8

//  val2= val1+val2
//  val1=val2-val1
//  val2=val2-val1

//  console.log(val1)
//  console.log(val2)

// Q 5. How to check the given number is Positive or Negative in JavaScript?
// let no=4
// function ispossative(no) {
//     if (no>-1) {
//         return ("positive")
//     }else{

//         return ("possative")
//     }
// }

// let result=ispossative(no)

// console.log(result)

// Q 6. Write a JavaScript Program to find whether given number is Leap year or NOT?

// let year=2024
// function leapyear(year) {
//    return (year%4==0)?"leapyear" : "not leapyear"

// }
// let res= leapyear(year)
// console.log(res)

// Q 9. Write a JavaScript Program to print the digits of a Given Number.

// let digit=2345
// function printno(number) {
//     if (number < 10) {
//         console.log(number);
//       } else {
//         printno(Math.floor(number / 10));
//         // console.log(number % 10);
//       }
// }

// printno(digit)

// console.log(25%10)

//element is present in array or not

// let arry=[12,4,5,22,67,19]
// let findval=67
// let res=arry.find((e)=>e==findval)
// console.log(res);

// console.log(arry.includes(67));

//✌ find the index of a no i array

// let arry=[12,"hello",'45','9i',6]

// function checkIndx(arry,target){
//     for (let i=0;i<arry.length;i++){
//         // return arry[i]
//         if(arry[i]===target){
//             return i
//         }

//         }

//             return -1

// }
// let res=checkIndx(arry,'hello')

// console.log(res)

//✌ array add element to different position --> array.splice
//✌ array add element to last position --> array.push
//✌ array add element to first position --> array.unshift

// let arry=[12,"hello",'45','9i',6]

// function addelm(arry,target){

//     // arry.splice(1,0,"target")
//    return arry.slice(1,4)

//     // let newval=

// //  return newval

// }
// let res=addelm(arry,'yes')

// console.log(res)
// // console.log(

//     arry.slice(-2)
//     )

// console.log(arry)

// shallow copy

// let arry1 = [1, 2, 3, 4, 5];

// arry1.splice(1, 0, "2u");

// console.log(arry1);

// //deep copy
// let xx = [...arry1, 22];
// console.log(xx);

// ✌ is two arry is equal or not

let arry1 = [1, 2, 3, 4];
let arry2 = [1, 2, 3, 4];

let isequalArry = (arry1, arry2) => {
  if (arry1.length !== arry2.length) {
    return false;
  }

  for (let i = 0; i < arry1.length; i++) {
    if (arry1[i] === arry2[i]) {
      return true;
    }
  }
  return false;
};

let res = isequalArry(arry1, arry2);

console.log(res);
