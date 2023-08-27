// const name='ayan'

// function funcval() {
//     const name='ram'
//     console.log(name)
// }
// funcval()
// console.log('2',name)

// {

// }

// let dd=null
// console.log(dd)

// console.log(0 / 0);     // NaN
// console.log(Math.sqrt(-1));  // NaN

// console.log(parseInt(1234.888));   // NaN
// console.log(isNaN("world")); // NaN

// console.log(Number('33anc'))

// console.log('33'+2+55+NaN)

// let a =4

// // ++a
// a++

// console.log(a)

// console.log(null>0)

// let name="ayan"

// let anotherName= name

// anotherName="rahul"

// console.log(name)
// console.log(anotherName)

// let val="ayan".split("")
// console.log(val)

// let balance = new Number(100)
// let balanceStr = new String(100)
// console.log(balance);
// console.log(balanceStr);

// let rand=Math.round(Math.random()*((20-10)+1))+10
// console.log(rand)

// let date = new Date( 2030 , 1, 12)
// // console.log(date.getTime())
// date=date.toLocaleDateString("default",{
//     weekday:"long"
// })

// console.log(date)

// let arr= new Array( 1,2,4,56,8)

// const originalArray = [1, 2, 3];
// const shallowCopy = Array.from(originalArray);

// console.log(shallowCopy)

// let arr=[4,5,7,2,7,54,23]

// console.log(arr.slice(2,5))
// console.log("1",arr)
// console.log(arr.splice(2,5))
// console.log("2",arr)

// let A = [1, 2, 3];
// let B = [4, 5, 6];

// let C = [...A, ...B];

// // console.log(C);

// const arrayOfArrays = [
//   [1, 2, 3],
//   [4, 5, 6], 55,
//   [7, 8, 9],
// ];

// let newarry=arrayOfArrays.flat()
// console.log(newarry)

// let symb= Symbol("mySymbolDescription")

// //Object
// const person = {
//     "my name" : "Alice",
//     [symb]:"key1",
//     age: 30,
//     occupation: "Engineer",
//     introduce: function() {
//         return `Hi, I'm ${this.name}, ${this.age} years old, and I work as an ${this.occupation}.`;
//     }
// };

// console.log(person['age'])
// console.log(person.introduce())

// console.log(person[symb])

// person.transpotation =function(){
//     console.log(`${this["my name"]} is travelling by Bus`)
// }

// person.transpotation()

// console.log(person)


// Object methode

let obj1={a:1,b:2}
let obj2={c:3,d:4}

// let newObj={...obj1,...obj2}
let newObj=Object.assign({},obj1,obj2)
let newObj1=Object.keys(obj1,obj2)
let newObj2=Object.values(obj1,obj2)
let newObj4=Object.entries(newObj)

console.log(obj1.hasOwnProperty("av"));

