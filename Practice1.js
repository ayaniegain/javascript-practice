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
    {name: 'a', gender: 'm'},         
    {name: 'b', gender: 'm'},         
    {name: 'c', gender: 'f'},         
    {name: 'd', gender: 'm'},         
    {name: 'e', gender: 'f'}         
    ];

    let male=[]
    let female=[]

   x.filter((e)=>{
          if (e["gender"]=="m") {
              male.push(e)
          }
          if (e["gender"]=="f") {
            female.push(e)
        }
    })

let allCandidate={"m":male,"f":female}

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



let myArray = [12,-2,55,68,80];

[myArray [0],myArray [1]]=[myArray [1],myArray [0]]

console.log(myArray )



    
   
    