const doc = document;

function increment() {
  const value = doc.querySelector("h1").innerText;
  doc.querySelector("h1").innerText = Number(value) + 1;
  console.log("++");
}

function decrement() {
  console.log("--");
  const value = doc.querySelector("h1").innerText;

  if (value > 0) {
    doc.querySelector("h1").innerText = Number(value) - 1;
  }
}

function reset() {
  doc.querySelector("h1").innerText = 0;
}

// const arr1 = [1, 23, 4, 5, 67];
// const arr2 = [1, 23, 45, 4, 87];
// const arr3 = [1, 233, 42, 52, 57];
// const arr4 = [1, 235, 421, 53, 43];

// function commanFunc() {
//   let comman = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr2[j] === arr1[i]) comman.push(arr2[j]);
//     }
//   }
//   return comman;
// }

// console.log(commanFunc());

const arr = [90, 100, 78, 89, 67];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
    }
  }

  console.log("");
}

// // i = 0

// [90, 100, 78, 89, 67];
// [78, 100, 90, 89, 67];
// [78, 100, 90, 89, 67];
// [78, 100, 90, 89, 67];
// [67, 100, 90, 89, 78];

// // i = 1

// [67, 90, 100, 89, 78];
// [67, 89, 100, 90, 78];
// [67, 78, 100, 90, 89];

// // i = 2

// [67, 78, 90, 100, 89];
// [67, 78, 89, 100, 90];

// // i = 3
// [67, 78, 89, 90, 100];
