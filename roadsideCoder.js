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
