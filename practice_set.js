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

// let x = [
//   { name: "a", gender: "m" },
//   { name: "b", gender: "m" },
//   { name: "c", gender: "f" },
//   { name: "d", gender: "m" },
//   { name: "e", gender: "f" },
// ];

// let male = [];
// let female = [];

// x.filter((e) => {
//   if (e["gender"] == "m") {
//     male.push(e);
//   }
//   if (e["gender"] == "f") {
//     female.push(e);
//   }
// });

// let allCandidate = { m: male, f: female };

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

// -------------->odd even👏
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

// ---------------> factorial👏

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

//find the smellest number in array 👏


// let arry=[1,24,3,48,99]


// let smallestArray=(arry)=>{
// let small=arry[0]
//     for(let i=0;i<arry.length;i++){
//        if(small>arry[i]){
//            small=arry[i]
           
//        }
//     }
//    return small
// }

// let res=smallestArray(arry)

// console.log(res)

// -----------------anil siddhu Js Interview😍

// let ss=['a',"b","c"]

// let [xx]=ss

// console.log(xx);

// let val1={name:"Ayan",age:28}
// let val2={name2:"Ayan1",age2:18}

// let newArray={...val1, ...val2}
// console.log(newArray);

//linear search👍

// let arry=[2,4,5,6,7,20]

// function lenSerch(val) {
//     for (const i of arry) {

//         if (i==val) {
//             return arry.indexOf(i)
            
//         }
//     }
//     return -1
// }

// let res=lenSerch(7)
// console.log(res);

//sort the array

// let dd=[3,2,6,7,8,5,50]



// let newarry=dd.sort((a,b)=>a-b)


// function binarySearch(val) {
//     for (const i of newarry) {

//         if (i==val) {
//             return newarry.indexOf(i)
            
//         }
//     }
//     return -1
// }

// let res=binarySearch(7)
// console.log(res);
