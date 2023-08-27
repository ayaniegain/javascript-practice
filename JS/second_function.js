// function👀

// //function decliration
// function name(params) { //parameterns
//  //function defenation
// }
// name(a=1) //arguments
// //function call

// function restFunction(...num) {
//     console.log(num)

// }
// restFunction(200,400,300)

// const person = {
//   "my name": "Alice",
//   age: 30,
//   occupation: "Engineer",
//   introduce: function () {
//     return `Hi, I'm ${this.name}, ${this.age} years old, and I work as an ${this.occupation}.`;
//   },
// };

// function takeuser(userDetails) {
//     console.log(userDetails)
//     const{age, ['my name']: name}=userDetails

//     // return `the user is ${userDetails['my name']}`
//     return `the user is ${name}`

// }

// let userameDetails=takeuser(person)

// console.log(userameDetails)

// scope👀

// let a=30
// function abc() {
//      a=20
//     return function bca() {

//          a
//         return a

//     }

// }
// let val=abc()

// console.log(val())

// async function outerFunction() {
//     const outerVariable = await "I am from the outer function";
//     console.log('one')

//   async  function innerFunction() {
//       console.log ('1',outerVariable); // Accessing outerVariable from innerFunction

// setTimeout(() => {
//     console.log('set')
// }, 0);
//         const innerVariable = await "I am from the inner function";
//         console.log(innerVariable); // Accessing innerVariable from innerFunction
//     }
//     console.log('two')

//     innerFunction();
//     console.log('2',outerVariable); // Accessing outerVariable from outerFunction
//     // console.log(innerVariable); // This would result in an error, innerVariable is not accessible here
// }
// console.log('three')

// outerFunction();
// console.log('four')

// const addTwo= (num1,num2)=>({user:'ayan'})

// console.log(addTwo(3,5))

// IIF

// (function (no1) {
//   console.log(`IIFE ${no1}`);
// })(3);

//check empty condition👀

// let str=''
// let str1
// let arr=[]
// let obj ={}
// let num=0

// if (Object.keys(obj).length === 0) {
//     console.log('true')
// }

// nullish coalescing operator"👀

// const foo = null ?? 'default string';
// console.log(foo);
// Expected output: "default string"

// var baz = 0 (??) 42;
// console.log(baz);
// Expected output: 0

