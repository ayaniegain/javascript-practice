// let functionAray = () => {
//   let arry = [12, 33, 45, 32, 4, 90];
//   //   for (i = 0; i < arry.length; i++) {
//   // }
//   let el = +document.getElementsByClassName("input")[0].value;

//   if (el < arry.length && el >= 0) {
//     alert(`array value is:  ${arry[el]}`);
//   } else {
//     alert("choose correct value");
//   }
// };

// ⏭️insert in arry

// function InsertArray(arr, target, value) {
//   //   arr.splice(target, 0, value);

//   for (let i = arr.length - 1; i > 0; i--) {
//     if (i >= target) {
//       arr[i + 1] = arr[i];

//       if (i == target) {
//         arr[i] = value;
//       }
//     }
//   }

//   console.log(arr);
// }
// let arr = [12, 45, 33, 12, 78, 10];
// let target = 2;
// let value = 99;

// let res = InsertArray(arr, target, value);

// // console.log(res);

// ⏭️ delete in arry

// function deleteElm(arr, target) {
//   for (let i = target; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr.length = arr.length - 1;
//   return arr;
// }

// let arr = [12, 45, 33, 12, 78, 10];
// let target = 2;

// let res = deleteElm(arr, target);

// console.log(res);

// ✅--------Linear Search--------
// let arr = [2, 1, 4, 78, 34, 33, 24, 22];

// function searchItem(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }

// let res = searchItem(arr, 34);

// console.log(res);

//  ✅-----marge two array

// function mergeArray(arr1, arr2) {
//   let newArray = [];

//   for (let i = 0; i < arr1.length; i++) {
//     newArray[i] = arr1[i];
//   }

//   for (let j = 0; j < arr2.length; j++) {
//     newArray[arr2.length + j] = arr2[j];
//   }

//   return newArray;
// }

// let arr1 = [2, 3, 6, 7];
// let arr2 = [1, 2, 7, 8];

// let res = mergeArray(arr1, arr2);

// console.log(res);

// ✅checkrepeted element or duplicate elm in array

// function repeatedValue(nums) {
//     let newArray=[]
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//         newArray.push(nums[i])
//     }
//   }

//   return newArray;
// }

// let nums = [1, 2, 4,7,4,2];
// let res = repeatedValue(nums);

// console.log(res);

// ☑️ Bubble sort

// let array = [40, 30, 12, 26];

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (array[j] > array[j+1]) {
//       let temp = array[j];
//       array[j] = array[j + 1];
//       array[j + 1] = temp;
//     }
//   }
// }
// console.log(array);
// let arr = [94, 66, 47, 12, 26];

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// console.log(arr);

