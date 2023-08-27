// LOOP👀
// arr=[1,2,3,4,5]
// let greeting='helllo world'
// for (const val of arr) {
//     // console.log(val)
// }

// for (const greet of greeting) {
//     console.log(greet)
// }


// let map1=new Map()

// map1.set('a',1)

// console.log(map1.get('a'))

// let arr=[1,2,3,4,5]
// let newarr=[]
// arr.forEach((e)=>newarr.push(e+10))

// console.log(newarr)

//loop chaining👀

//reduce👀

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 15

let AllCourse=[
      {
        "courseType": "Mathematics",
        "price": 150
      },
      {
        "courseType": "Science",
        "price": 200
      },
      {
        "courseType": "History",
        "price": 120
      },
      {
        "courseType": "Art",
        "price": 180
      }
    ]

  let TotalPrice=  AllCourse.reduce((acc,curr)=>acc+curr.price,0)
  
console.log(TotalPrice)