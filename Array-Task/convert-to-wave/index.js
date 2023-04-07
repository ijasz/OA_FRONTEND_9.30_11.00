function covertToWave(arr) {
  let array = [...arr];
  for (let i = 0; i < arr.length - 1; i++) {
    [array[i], array[i + 1]] = [array[i + 1], array[i]];
  }

  return array;
}

const arr = [1, 2, 3, 4, 5];

console.log(covertToWave(arr));

// let myArray = [12, -2, 55, 68, 80];

// [myArray[0], myArray[1]] = [myArray[1], myArray[0]];

// console.log(myArray);
