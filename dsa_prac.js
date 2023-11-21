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