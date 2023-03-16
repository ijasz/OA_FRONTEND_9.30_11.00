// Array methods

const arr = [16, 22, 32, 3, 45, 5, 6, 76, 878];

// function mymap() {
//   const output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(arr[i] * 2);
//   }
//   return output;
// }

// const output = arr.map((i) => i * 2);

// console.log(output);

// console.log("");

// console.log(mymap());

// function callback(element, index, array) {
//   return index;
// }

// const a = arr.map((element, index, array) => element * 2);

// console.log(a);

function mymap(array, callback) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(callback(array[i], i, array));
  }

  return arr;
}

// const output = mymap([16, 22, 32, 3], (element, index, array) => {
//   console.log(element, index, array);
// });

const output1 = mymap(arr, (i) => i * 2);
const output2 = arr.map((i) => i * 2);

console.log(output1);
console.log(output2);

// Array.prototype.mymap = () => "hello";

// const arr2 = [1, 2, 4];

// console.log(arr2.mymap());

// console.log(arr.mymap());
