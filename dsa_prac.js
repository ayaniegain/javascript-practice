//fibonacci sequence
// let no = 0;
// fibbo = (no) => {
//   let arr = [0, 1];
//   if (no < 3) {
//     return arr;
//   } else {
//     for (let i = 3; i < no + 1; i++) {
//       arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//     }
//   }
//   return arr;
// };
// let ans = fibbo(no);
// console.log(ans);

//factorial

// let no=4

// function fact(no){
//     if(no===0){
//           return 1
//     }
//     return no * fact (no-1)

// }
// console.log(fact(no))

//fibonacci sequence
// let no = 6;
// fibbo = (no) => {

//   if (no < 2) {
//     return no;
//   }

//   return fibbo(no-1)+ fibbo(no-2)

// };
// let ans = fibbo(no);
// console.log(ans);

// linear Search [(O)n]
// let arr=[2,-4,56,88,6]
// let target =8

// function lSearch(array,target) {

// for (let i = 0; i < array.length; i++) {

//     if (arr[i]==target){
//         return i

//     }

// }
//  return -1
// }
// console.log(lSearch(arr,target))

// Binary Search

// let arr=[ 39,5,-7,30,88,65]
// let target =30

// let sortedArray=[]
// function binarySearch(arr,target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i-1]>arr[i]) {
//             arr[i]
//             sortedArray.push(arr[i])
//         }
//     }
//     // console.log(sortedArray)
//     return sortedArray
// }
// console.log(binarySearch(arr,target))

//sum of Nth

// function totalSum(n) {
//     if (n==1) {
//         return 1
//     }else{
//         let sum=0

//         for (let i = 1; i <= n; i++) {
//            sum=sum+i

//         }
//         return sum
//     }
// }
// let n=6
// let result=totalSum(n)

// console.log(result);

// Given an array Arr of N positive integers. Your task is to find the elements whose value is equal to that of its index value ( Consider 1-based indexing ).
//0,1,2,3,4,5,6
// let arry = [4, 7, 8, 3, 0, 5, 9];

// function checkIndecis(arry) {
//   return arry.filter((e, i) => e == i);
// }
// let result = checkIndecis(arry);

// console.log(result);

//print alternative element in arrray

// let arry = [3, 5, 7, 8, 9, 2, 3, 5, 7];

// function altelm(arry) {
//   let farray = [];
//   for (let i = 0; i < arry.length; i++) {
//     if (i % 2) {
//       farray.push(arry[i]);
//     }
//   }

//   return farray;
// }

// let res = altelm(arry);
// console.log(res);

//print 1 to 10 without loop

// function wtlp(n) {
//   if (n <= 10) {
//     console.log(n);

//     wtlp(n + 1);
//   }
// }
// wtlp(1);

////////////NEW COURSE//////////😊

// 1. sun of all natural no 1 to 10

// let allSum=(no)=>{
//   let sum=0
// for (let i=1;i<=no;i++){
//   sum+=i
// }
//   return sum
// }
// let n=5
// let results=allSum(n)
// console.log(results)

// 2. sum of digit of number

// let digi=1287=18

// let digit=1111

// let newdigit=digit.toString().split('');

//     let val=0
// let sum=newdigit.reduce((a,b)=>parseInt(a)+parseInt(b),val)

// console.log(sum)

// 3. palindrome no

// function pallen(val){

//   let res1=  val.toString().split('').reverse()

//   let res2=parseInt(res1.join(''))

//     if(val===res2){
//         return true
//     }else{
//         return false
//     }

// }
// let val=122

// let results=pallen(val)
// console.log(results)

// 4. fibonacci no

// // program to generate fibonacci series up to a certain number

// // take input from the user
// const number = parseInt(prompt('Enter a positive number: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');
// console.log(n1); // print 0
// console.log(n2); // print 1

// nextTerm = n1 + n2;

// while (nextTerm <= number) {

//     // print the next term
//     console.log(nextTerm);

//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
// }

//find the missing no in array [2,3,4]

// let arry=[1,3,4]

// function missingItem(){
//     let arrysum=arry.reduce((a,b)=>a+b)

//     let newarry=arry.sort()
//     let lastval=newarry.pop()

//     let sum=0

//     for (let i=arry[0];i<=lastval;i++){

//        sum=sum+i
//     }

//     return sum-arrysum
// }
// let res= missingItem()
// console.log(res)

// ✌Q 5. How to check the given number is Positive or Negative in JavaScript?
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

//✌ Q 9. Write a JavaScript Program to print the digits of a Given Number.

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

// let arry1 = [1, 2, 3, 4];
// let arry2 = [1, 2, 3, 4];

// let isequalArry = (arry1, arry2) => {
//   if (arry1.length !== arry2.length) {
//     return false;
//   }

//   for (let i = 0; i < arry1.length; i++) {
//     if (arry1[i] === arry2[i]) {
//       return true;
//     }
//   }
//   return false;
// };

// let res = isequalArry(arry1, arry2);

// console.log(res);

// 2nd sol

// let cc=  arry1.every((elm,i)=>arry1[i]===arry2[i])

// console.log(cc
// );

//anagram👍

// let str='anagram';
// let str2="nagaram"

// function isAnagram(s1,s2) {
//     return s1.split('').sort().join("")== s2.split('').sort().join("")

// }
// let val=isAnagram(str,str2)

// // console.log(val);

// let angArray=['bat',"tab","atb","bbc","cab"]
// let first =angArray[0]

// let cx=angArray.filter((e)=>e)

// console.log(cx);

// function anagm() {

//     for (const i of angArray) {

//         return first.split('').sort().join("") == i.split('').sort().join("")

//     }

// }
// let cc=anagm()

// console.log(cc);

// longest common Prefix 👍

// let strs=["flowers","flow","flight"]
// var longestCommonPrefix = function (strs) {
//     // Return early on empty input
//     if (!strs.length) return '';

//     // Loop through the letters of the first word
//     for (let i = 0; i <= strs[0].length; i++) {
//         // Check if this character is present in the same position of every string
//         if (!strs.every((string) => string[i] === strs[0][i])) {
//             // If not, return the string up to and including the previous character
//             return strs[0]
//         }
//     }

//     return strs[0];
// };

// let res=longestCommonPrefix(strs)
// console.log(res);

// DSA 😊

//BIG-O for worst case
//Omega for best case
//Theta for average case

// Object time complexity always O(1) //Insert,Access, Remove

// Search, Object-keys,values,entries is O(n)

// let fibbo =(n)=>{
// let a=0;
// let b=1;
// let ss

// for (let  i= 1;  i< n; i++) {
//     console.log(a);

//     ss= a+b
//     a=b
//     b=ss

// }

// }

// let res=fibbo(6)

// console.log(res);

// --------------------------DSA---------------------------❤️❤️

// asymptotic Analysis

// let n=6

// let val=n*(n+1)/2
// console.log(val);

// let sum=0

// for (let i = 0; i <= n; i++) {
//     sum=sum+i

// }

// console.log(sum);
// let sum =0
// for (let i = 1; i <= n; i++) {
//    for (let j = 1; j <=i; j++) {
//  sum++
//    }

// }
// console.log(sum);

// 👍----order of growth
// c<loglogN< logN < n1/3 <n1/2< n<n2<n3<n4<2n<nN

/*
if g(n)>f(n) =bad algo


*/

// 👍---------ALL notation
/*
Big(O) =>exact and upper bound , its covers all so worse case
Theta() =>exact  , its covers average case.
Omega() =>exact and lower bound , basically constant, best case but not usefull.
*/

// count degit of an integer👍

// let count =0
// function countlength() {
//     let val=3456;

// while (val>0) {

//     val=  Math.floor(val/10)

//     count++

// }}

// countlength()

// console.log(count);

// pallendrome no 👍
// let val=121

// function pallendno() {

//     let xx= val.toString().split('').reverse().join("")

//     return xx

// }

// let res=pallendno()
// console.log(res);

// function palendrom(n) {

//     let res;
//     let sum=0;
//     let temp=n;

//     while (temp>0) {
//         res=temp%10;
//         sum=sum*10+res;
//         temp=Math.floor(temp/10);
//     }

//     if (sum==n) {
//         return "palendrome"
//     }else{
//         return "Not palendrome"

//     }

// }

// let n=121;

// let res= palendrom(n);

// console.log(res);

// let ispallendrome = () => {
//   let pallen = 431;

//   let rem;
//   let temp = pallen;
//   let sum = 0;

//   while (temp > 0) {
//     rem = temp % 10; // 4,3,4

//     sum = sum * 10 + rem; //

//     temp = Math.floor(temp / 10);
//   }

//   if (pallen === sum) {
//     return "its pallen";
//   } else {
//     return "its not pallen";
//   }
// };

// let result = ispallendrome();

// console.log(result);

//reccursion 👍

// function fun(n){

//     if (n===0) return ;

//     fun(n-1)
//     console.log(n);
//     fun(n-1)
// }

// fun(3)

// function recc(n) {

//     if (n==0) {
//         return;
//     }

//     recc(n-1)
//     console.log(n);
//     recc(n-1)

// }

// recc(5)

// let arr=[10,20,35,45]
// arr[5]=55

// console.log(arr);

// array is sorted or not 👍

// let arr = [23, 44, 63, 78.88];
// function arrySorted() {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// let results = arrySorted();

// console.log(results);

// reverse the array👍

// let arr=[10,56,45,11,90]

// function revarry(n) {
//     let emparry=[];

//     for (let i = arr.length-1; i > 0; i--) {
//         emparry.push( arr[i])

//     }

//     return emparry

// }

// let res=revarry(arr)

// console.log(res);

// 2/ reverse the arry 👍
// function revarray() {
//     let array=[23,55,6,7,11]
//     let low=0
//     let high= array.length-1

//     while (low<high) {
//         [array[low],array[high]]=[array[high],array[low]]

//         low++
//         high--

//     }
//     return array

// }
// let res=revarray()
// console.log(res);

// move all zero to last of the array👍

// function endzero(arr,num) {

//     let first=[]
//     let second=[]

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]!==num) {
//             first.push(arr[i])
//         }
//         if (arr[i]==num) {
//             second.push(arr[i])
//         }

//     }

//     let newArray=[...first,...second]
//     return newArray

// }
// let arry=[2,9,0,2,6,8,2,5,7,2,4,0,3,8,0,45]
// let res=endzero(arry,2)

// console.log(res);
// move all zero to last of the array👍

// function zerolast(arry) {
//   for (let i = 0; i < arry.length; i++) {
//     if (arry[i] == 0) {
//       for (let j = i + 1; j < arry.length; j++) {
//         if (arry[j] !== 0) {
//         [arry[i],arry[j]]=[arry[j],arry[i]]
//             break;
//         }

//       }
//     }
//   }

//   console.log(arry);
// }
// let arry = [2, 9,0, 0, 3, 8, 0, 45];

// zerolast(arry);

// move all zero to last of the array👍

// function zerolast(arry) {

//     let count=0;
//   for (let i = 0; i < arry.length; i++) {
//     if (arry[i] !== 0) {

//         [arry[i],arry[count]]=[arry[count],arry[i]]

//         count++

//       }
//     }
//     console.log(arry);
//   }

// let arry = [2, 9,0, 0, 3, 8, 0, 45];

// zerolast(arry);

// let arry = [10, 20, 30,77];

// function zerolast(arry) {
//   let x = arry[0];

//   for (let i = 1; i < arry.length; i++) {
//     arry[i - 1] = arry[i];

//     arry[ arry.length - 1] = x;
//   }
//   return (arry);
// }

// let res=zerolast(arry);
// console.log(res);

// serach the item in array using binary search approach 👍

// let arry = [10, 20, 30, 40, 50, 60, 70];
// let findElm = 40;
// function searchInd() {
//   let low = 0;
//   let high = arry.length - 1;
//   let mid;
//   while (low <= high) {
//    mid = (Math.floor(low + high) / 2)
//     if (arry[mid] == findElm) return mid;

//     if (arry[mid] > findElm) high = mid - 1;
//     else low = mid + 1;
//   }
//   return -1;
// }

// let res = searchInd();

// console.log(res);
// linier search 👍

// function findAnum(arr, no) {
//   let results=[]
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == no) {
//       results.push(i);
//     }
//   }

//  return results.length!==0 ?  results :  -1

// }
// let arr = [23, 44, 56, 77,,23, 2, 1, 7, 8,23];
// console.log(findAnum(arr, no=23));

// given an array of positive integer sorted in a increasing order and an integer k.👍

// let array=[2,3,4,7,11] //15689
// let k=5

// function findKelm(arr,k) {

//     let count=0;

//     for (let i = 0; i < arr.length; i++) {
//        if (array[i]<count+k) {
//             count++
//        }        
//     }

//     return count+k
  
// }

// console.log(findKelm(array,k))


// function binarySearch(arr,target) {

//     let min=0
//     let max=arr.length-1
    
//     while (min<=max) {
//         let mid=(Math.floor((min+max)/2))
//         if (arr[mid]==target) {
//             return mid
//         }
//        else if (arr[mid]<target) {
//             min =mid+1
//         }else {
//             max= mid-1
//         }
        
//     }

// return -1
    
// }

// let arr=[2,3,5,9,10,11]
// let target =10

// let res=binarySearch(arr,target)

// console.log(res);

