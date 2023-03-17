const arr = [3, 4, 5, 7, 7, 4];

// let output1 = 0;
// for (const i of arr) {
//   output1 += i;
// }

// console.log(output1);

// const output = arr.reduce((i, c) => i + c);

// const callback = (accumlator, currentValue, currentindex, array) => {
//   console.log(accumlator, "accumlator");
//   console.log(currentValue, "currentValue");
//   console.log(currentindex, "currentindex");
//   console.log(array, "array");
//   console.log("");
//   return accumlator + currentValue;
// };

// const output = arr.reduce((a, c) => a + c, 5);

// console.log(output, "output");

function callback(element, index, array) {
  //   console.log(element, "element");
  //   console.log(index, "index");
  //   console.log(array, "array");
  //   console.log("");
  if (element >= 5) {
    console.log("condition true", element);
    return element;
  }
}

const myfilter = (array, callback) => {
  const arr = [];
  // code starts
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      arr.push(array[i]);
    }
  }
  // code ends
  return arr;
};

const output2 = myfilter(arr, (e) => e >= 5);

console.log(output2, "output");

const output1 = arr.filter((value) => value >= 5);

console.log(output1, "output1");
