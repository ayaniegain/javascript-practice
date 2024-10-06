// // small possitive missing number 👀

const { on } = require("nodemon");

// let Arr= [7,-4,3,1,2,6,9,-3]
// function smallposMisstingNo(arr) {
//     const numbersSet = new Set(arr);
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

// swap arr value in perticular possition 👀

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

//find the smellest number in arr 👏

// let arry=[1,24,3,48,99]

// let smallestarr=(arry)=>{
// let small=arry[0]
//     for(let i=0;i<arry.length;i++){
//        if(small>arry[i]){
//            small=arry[i]

//        }
//     }
//    return small
// }

// let res=smallestarr(arry)

// console.log(res)

// -----------------anil siddhu Js Interview😍

// let ss=['a',"b","c"]

// let [xx]=ss

// console.log(xx);

// let val1={name:"Ayan",age:28}
// let val2={name2:"Ayan1",age2:18}

// let newarr={...val1, ...val2}
// console.log(newarr);

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

//sort the arr

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

//  check given string in pallendrome or not 😊

// let str= "mom"

// function ispallen(params) {

//     let newstr=str.split("").reverse().join("")
//     if (str==newstr) {

//         return true

//     }
//     else{
//         return false
//     }
// }
// let result=ispallen()

// console.log(result);

// Count number of vowels, consonants, spaces in String 😊

// let mystr = "number of vowels";

// let includevowel = 0;
// let includeconso = 0;
// let includespace = 0;

// function countWord() {
//   let val = mystr.split("");

// for (let i = 0;  i< val.length; i ++) {

//     // newStr.map((val) => {
//         if (val[i] == "a" || val[i] == "e" || val[i] == "i" || val[i] == "o" || val[i] == "u") {
//             includevowel++;
//         } else if ((val[i] >= "b" && val[i] <= "z")) {
//             includeconso++;
//         } else if(val[i]  !== ""){
//             includespace++;
//         }

//     // });
// }
// }

// countWord();

// console.log(includevowel);
// console.log(includeconso);
// console.log(includespace);

// remove all vowel from chaarcter😊

// let mystr = "number of vowels";

// function removeVowel() {

//   let newstr=  mystr.split('')

//   let cc= newstr.filter((e)=>(e!== "a" && e!== "e" && e!== "i" && e!== "o" && e!== "u") )
//   return cc.join('')

//         }

// let res=removeVowel()

// console.log(res);

// Remove characters from a string except alphabets😊

// function nonChar() {

//     let mystring=" hello this is @123&"

//     let onlyString=''

//     for (let i = 0; i < mystring.length; i++) {
//             let char= mystring[i]

//             if (char>="a" && char<="z") {
//                 onlyString=char+onlyString

//             }

//     }

// return onlyString

// }

// let res= nonChar()

// console.log(res);

// 1) How to find the maximum occurring character in a given String? 👍

//find the smalest element in arr

// let smallarr = [23, 5, 77, 4, 1, 32, 89, 45];

// let low = smallarr[0];

// function smallFunc(smallarr) {
//   for (let i = 0; i < smallarr.length - 1; i++) {
//     if (low > smallarr[i]) {
//       low = smallarr[i];
//     }
//   }

//   return low;
// }
// let res = smallFunc(smallarr);

// console.log(res);

// let smallarr = [23, 5, 77, 4, 32, 89,45,2];

// function smallFunc(smallarr) {
//   for (let i = 0; i < smallarr.length; i++) {
//     if (low > smallarr[i]) {
//         xx.push(low)
//       low = smallarr[i];
//     }sor
//   }

//   return xx;
// }
// let res = smallFunc(smallarr);

// console.log(res);

// let missingNumber=(arr,n)=>{

//   let sortedarr= arr.sort()

//   let first=sortedarr[0]
//   let last =sortedarr.length

//   let value=[]

//   for(let i=first; i<=last; i++){

//     if (arr.indexOf(i)==-1) {
//       console.log(i);
//       value.push(i)

//     }
//   }

//   return value

// }
// let arr=[1,2,3,5]
// let res=missingNumber(arr)

// console.log(res);

//missing number in arr

// let arr = [12, 34, 55, 67, 78, 23, 90];
// let no = 78;

// function misstinNo(arr, no) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == no) {
//       return arr.indexOf(arr[i]);
//     }
//   }
// }

// let res = misstinNo(arr, no);
// console.log(res);

// reverse the string

// let s = ["h", "e", "l", "l", "o"];

// var reverseString = function (s) {
//   let low = 0;
//   let high = s.length-1;

//   while (low < high) {

//       [s[low], s[high]] = [s[high], s[low]];
//       high--;
//       low++;
//   }
//   return s;
// };

// console.log(reverseString(s));

// var createCounter = function (n) {
//   let counter = n;

//   return function () {

//     return counter ++;
//   };
// };

// const counter = createCounter(10);
// console.log(counter()); // 10
// console.log(counter()); // 11
// console.log(counter()); // 12

//write a program decrese the payment by 10 rupees in actor 1 and actor 2 and show the results.

// let actors =[
//     {
//       name:'Actor 1',
//       payment:200
//     },
//     {
//       name:'Actor 2',
//       payment:100
//     },
//     {
//       name:'Actor 3',
//       payment:300
//     }
//   ]

//   actors.forEach(actor => {
//     if (actor.name === 'Actor 1' || actor.name === 'Actor 2') {
//         actor.payment =actor.payment- 10;
//     }
// });

// console.log(actors);

let actors = [
  {
    name: "Actor 1",
    payment: 200,
  },
  {
    name: "Actor 2",
    payment: 100,
  },
  {
    name: "Actor 3",
    payment: 300,
  },
];

//   let newValue=0
//   actors.forEach((e)=>{

//     newValue=newValue+e.payment

// })
// console.log(newValue);

// let total= actors.reduce((acc,curr)=>{
//     return acc+curr.payment
// },0)

// console.log(total);

//  const uniqueNumber= new Set();

//  uniqueNumber.add(30)
//  uniqueNumber.add(33)
//  uniqueNumber.add(23)

//  console.log( uniqueNumber);

// const urls= new Map()

// urls.set('dev1',"dev 1")
// urls.set('dev2',"dev 2")
// urls.set('dev3',"dev 3")

// console.log(urls.get('dev1'));

// for (const [key,value] of urls) {

// console.log(key);

// }

// let obj={
//   'dev1':"dev 1",
//   'dev1':"dev 1",
//   'dev1':"dev 1",

// }

// for (const [val,key] of Object.entries(obj)) {
//   console.log(key);
// }

// OOPs✔️
/** 
 * 
class Car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  
  runCar = () => {
    return ` ${this.name} speed is 29kmh`;
  };
}

let car1 = new Car("maruti", 123);

// console.log(car1.runCar());

class Address extends Car {
  constructor(address, name) {
    super(name);
    this.address = address;
  }
}

let location = new Address("Delhi",'helo');
*/

// console.log(location);

// function BankAccount(balance) {
//   this.balance = balance;

//   this.deposite = function (amount) {
//     this.balance += amount;
//   };
// }

// const rakeshBankAccout = new BankAccount(5000);
// const johnBankAccount = new BankAccount(6000);

// johnBankAccount.deposite(3000);

// console.log(rakeshBankAccout);
// console.log(johnBankAccount);

/*

//find the duplicate value✔️
*let duplicateElm=()=>{

  let arr=[34,77,89,0,33,34,9,66,4,9]
  let blnkarr=[]
  

  for (let i = 0; i < arr.length; i++) {
      for (let j = i+1; j < arr.length; j++) {
        if (arr[i]==arr[j] && !blnkarr.includes(arr[i])) {
          blnkarr.push(arr[i])
          
        }
        
      }    
  }

  return blnkarr

}
let res=duplicateElm()
console.log(res);
 */

/**
 * 
let arr=[34,77,89,0,33,34,9,66,4,9]


let newValue=arr.filter((elm,index,arr)=>arr.indexOf(elm)!==index)

console.log(newValue);
*/
//find max and min value in array

// JS practice // 05/04/2024
// manage the cash register
// Your program has currencies of Rs. 1, 5, 10, 20, 100, 500, 2000.
// Your user enters a bill amount say Rs. 243.
// Your user then enters a cash given say Rs. 2000.
// Now, help the user by telling how can he/she return the change to the customer with minimum number of notes?
// bonus
// You need two inputs from the user. Can you make it in a way where second input is only visible after the first input is given i.e. bill amount should be filled.

// function currencyCalculate(amount){
//   let note=[1, 5, 10, 20, 100, 500, 2000]

// }
// let amount=243

// currencyCalculate(amount)

// for (let i = 0; i < 11; i++) {

//     console.log(`${i}*${i}=${i*i}`);

// }

// -----------common problem

// function maxminfunc(val) {
//   let low = val[0];
//   for (let i = 0; i < val.length; i++) {
//     if (val[i] < low) {
//       low = val[i];
//     }
//   }

//   return low;
// }
// let arrValue = [34, 55, 67, 43, 4, 6];
// console.log(maxminfunc(arrValue));

// missing no in array
// let co=[]
// function missingNo(arr) {
//   for (let i = 1; i <= arr.length; i++) {
//    if (arr.indexOf(i)==-1) {
//       co.push(i)
//    }
//   }
// }

// let arr = [1, 2, 3, 5];
// missingNo(arr);

// console.log(co);

// ---------new Prac

// let value="hello world";
// res = value.replace(" ", "");

// let xx=Array.from(res)

// // console.log(xx)

// // let result =value.charAt(6)
// let result =value.substring(0,6)

// // console.log(result)

// let arr=[20,40,30,50,35,65,100]

// let newArry=[]
// arr.forEach((course)=>{
//   newArry.push(course)
// })

// // console.log(newArry)

// let username = ("          Enter your username  :            ");
// username = username.trim();
// username = username.replace(" ","");

// Array.of(username)

// Username might have extra spaces

// console.log(username);

// 1>Check if an input is a string.
/**
let checkString=(val)=>{

  if(typeof(val)=='string'){
    return true
  }else{
    
    return false
  }

}

// let str="12hello"
let str=12

let res= checkString(str)

console.log(res)
 */
// 2 Determine if a string is empty or contains only whitespace characters
/*
let isStringEmpty=(str)=>{
  str=str.trim()

if (str=='') {
return true

}

}
let str="      "
console.log(isStringEmpty(str))

*/

// 3/ Retrieve a specific character from a string based on its index.
// 4// join two string
// 5// total length
/*
 function checkIndexValue(str,str1){

   return str.concat(str1).length
}

let str="hello how are you?"
let str1=" I'm good"

console.log(checkIndexValue(str,str1))
*/

// Intermediate
// 1>Extract a portion of a string based on starting and ending indices.

// function extractTheString(str) {

//   return str.slice(6,str.length)

// }

// console.log(extractTheString("hello I will stop tomorrow"))

// let str ="Viru playing cricket, Viru is nice player"
// let replacestr="Ayan"

//       let res=str.replaceAll("Viru",replacestr)

//       console.log(res)

//1> Object , filter out the perticuler value where age is 30✅

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 }
// ];

// let filteredUser=users.filter((user)=>{
//   if (user.age==30) {
//     return user
//   }
// })
// console.log(filteredUser)
// 2>Task: Calculate the sum of a particular property in an array of objects.✅
// const products = [
//   { name: "Apple", price: 1.2 },
//   { name: "Banana", price: 0.8 },
//   { name: "Cherry", price: 2.5 }
// ];

// let res=products.reduce((acc,curr)=>{
//   return (acc+curr.price)
// },0)

// console.log(res)

// 3>Example 3: Sorting an Array of Objects based on age.✅

// const users = [
//   { name: "Alice", age: 45 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 }
// ];

// let newarry= users.sort((a,b)=>a.age-b.age)

// console.log(newarry)
//find the value✅
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 30 }
// ];

// console.log(
//   users.find((e)=>e.age==30)
// )

// update the Object value ✅

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 }
// ];

// let newUser=users.map((user)=>user.name=="Bob"? {...user, age:99}:user)

// console.log(newUser)

// Example 6: Removing an Object from an Array ✅

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 }
// ];

// let val=users.filter((e)=>e.name!=="Bob")

// console.log(val)

// Example 7: Mapping an Array of Objects to a New Array ✅

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 }
// ];

// let newArray=[...users]

// console.log(newArray)

// const repeatDuplicate =(no)=>{
//   let newarr=[...no]

//   console.log(newarr)

// for (let i = 0; i < no.length; i++) {

//   return newarr.includes(no)

// }

// }

// let arr=[1,4,5,6,3,1]

// let result =repeatDuplicate(arr)

// console.log(result)

// const repeatDuplicate =(arr)=>{

//   let set = new Set(arr)

//   return set.size!==arr.length

// }
// let result =repeatDuplicate([1,2,3,1])

// console.log(result)

// 1. Write a JavaScript program to display the current day and time in the following format.

// Sample Output :
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// let dateValue = new Date();

// const weekdays = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// let hour = dateValue.getHours();

// let prepand = hour >= 12 ? " PM " : " AM ";
// hour = hour >= 12 ? hour - 12 : hour;
// if (hour === 0 && prepand === " PM ") {
//   if (minute === 0 && second === 0) {
//     hour = 12;
//     prepand = " Noon";
//   } else {
//     hour = 12;
//     prepand = " PM";
//   }
// }

// let min = dateValue.getMinutes();
// let sec = dateValue.getSeconds();
// let dayofWeek = weekdays[dateValue.getDay()];

// console.log(`

//   Today is : ${dayofWeek}.
// Current time is : ${hour} ${prepand} : ${min} : ${sec}

//   `);

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10,
//  the user is then prompted to input a guess number.
//  If the user input matches with guess number,
//  the program will display a message "Good Work" otherwise display a message "Not matched".

// function randomValue() {

// let value=6
// let random=Math.floor(Math.random()*10)+1

// if (random==value) {
//   return "good work ❤️"

// }else{
//   return "does't match ⚔️"
// }
// }

// let res=randomValue()

// console.log(res)

// 9. Write a JavaScript program to calculate days left until next Christmas.

// let cristmasdayNumber;

// let newDate= new Date()

// console.log(newDate)

// Q 3. Write a javaScript program to Count the Number of Words in a given String.

// let name= "hello how are you?"

// let newname=name.split(" ")

// console.log(newname.length)

// let arr = [23, 443, 44, 55, 12, 90];

// let no = 12;

// function indexNo(arr, no) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == no) {
//       return i;
//     }
//   }
// }
// let res = indexNo(arr, no);

// console.log(res);

// 1. Write a function that returns the largest of two numbers.

// const  twoNo=(a,b)=>{

//   if (a<b) {
//     return b
//   }else{
//     return a
//   }

// }

// let res= twoNo(334,77)

// console.log(res)

// 2. Write a function that checks whether a given number is even or odd.

// const  evenOdd=(no)=>{

//   if (no%2==0) {
//     return "even"
//   }else{
//     return "odd"
//   }

// }

// let result= evenOdd(3341)

// console.log(result)

// 3. Write a function that converts Celsius to Fahrenheit.

// function celFar(temp) {

//   // °F = °C×(9/5)+32

//   let far= temp *(9/5)+32

//   return far

// }

// let res= celFar(100)

// console.log(res)

// 4. Write a function that takes an array of numbers and returns the sum of all numbers.

// function sumOfArray(arr) {
//   let sum=0

//   for (const i of arr) {

//      sum= sum+i

//   }

//   return sum

// }

// let arr=[1,2,3,4]

// let res= sumOfArray(arr)

// console.log(res)

// 5. Write a function that takes a string and returns the reverse of the string.

// function resvOfStr(strArray) {

//   let val=""
//  for (let i = str.length-1; i > 0; i--) {
// //  val.push(str[i])

// val +=str[i]

// // return str[i]

//  }

//  let cc=val

//  return cc

// }

// let str="I love myself"

// let strArray=str.split('')
// // console.log(strArray)

// let res= resvOfStr(strArray)

// console.log(res)

// 6. Write a function that takes an array of integers and returns the average (mean) of all the elements.

// function avgMean(arr) {

// return  arr.reduce((cur,res)=>{

//    return cur+res/arr.length

//   },0)

// }

// let arr=[1,2,3,5,4]
// let res=avgMean(arr)

// console.log(res)

// 7. Write a function that takes an array of numbers and returns the numbers that are even.

// let evenArray=(arr)=>{

//   return arr.filter((even)=>even%2==0)

// }

// let arr= [23,44,67,33,22,77,65,44]

// let res=evenArray(arr)

// console.log(res)

// 8. Write a function that checks whether a given string is a palindrome.

// let pallen = (str) => {
//   return str == str.split("").reverse().join("");
// };

// let str = "bob";

// let res = pallen(str);

// console.log(res);

// 9. Write a function that takes two arrays and returns a new array with unique elements from both arrays.

// function uniqueArray(x, y) {
//   let array = [...x, ...y];

//   let val = [...new Set(array)];

//   return val;
// }

// let array1 = [1, 23, 5, 3, 66, 54, 32, 99];
// let array2 = [1, 23, 55, 3, 86, 54, 92, 99];

// console.log(uniqueArray(array1, array2));

// 10. Write a function that takes a number and returns true if the number is prime, false otherwise.

// prime no 0,1  no%2=0,1

// function isPrimeNo(no) {
//   if (no <2 ) return "not prime"
//    for (let i = 2; i < no; i++) {

   
//    if (no%i===0) {
//      return "non prime";
    
//    }
//    }

//    return 'prime'
    
  
 
// }

// console.log(isPrimeNo(2));


//  var age= 20;

// console.log("value is ",age);

// var age=30


// const john={
//   name: 'John Doe',
//   sayName: function () {
//     console.log(this.name);
//   }
// }

// function sayName(){

//   console.log(this.name)

// }

// sayName.call(john)


