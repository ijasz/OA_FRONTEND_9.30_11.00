// Destructuring
// rest operator & Spread operator => ...
// array

// const arr1 = [1, 2];
// const arr2 = [3, 4, 5, 6];
// const arr3 = [7, 8, 9];
// const newarr = [0, ...arr1, ...arr2, ...arr3, 10];

// const [element1, element2, element3, ...rest] = newarr;

// console.log(element1);
// console.log(element2);
// console.log(element3);
// console.log(rest);

// console.log(newarr);

// Object

// spread
// const l = {
//   doorNo: 25,
//   area: "rainbow nagar",
//   loc: "pondy",
// };

// const person1 = {
//   f: "brathesh",
//   l: "kumar",
//   age: 20,
//   getFullname: function () {
//     console.log(this.f + " " + this.l);
//   },
//   ...l,
// };

// const persons = [
//   {
//     f: "brathesh",
//     l: "kumar",
//     age: 20,
//     getFullname: function () {
//       console.log(this.f + " " + this.l);
//     },
//   },
//   {
//     f: "xxx",
//     l: "yyy",
//     age: 21,
//     getFullname: function () {
//       console.log(this.f + " " + this.l);
//     },
//   },
// ];

// for (const i of persons) {
//   const { age: a } = i;
//   console.log(a);
// }

// const person2 = {
//   f: "brathesh",
//   l: "kumar",
//   age: 20,
//   getFullname: function () {
//     console.log(this.f + " " + this.l);
//   },
//   ...l,
// };

// rest

// console.log(person);
// console.log(loc);
// console.log(age);
// console.log(rest);

// getFullname.call(person);

// person.getFullname();

// console.log(arr1);

// for (const i of arr1) {
//   newarr.push(i);
// }
// for (const i of arr2) {
//   newarr.push(i);
// }
// for (const i of arr3) {
//   newarr.push(i);
// }

// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// setTimeout(() => console.log("hello"), 0);

// console.log("code");
// console.log("code");
// console.log("code");
// console.log("code");

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// const arr = [1, 2, 3, 4, 5];

// function sum(...arr) {
//   let ouput = 0;
//   for (const i of arr) {
//     ouput += i;
//   }

//   return ouput;
// }

// console.log(sum(1, 5, 8, 5));
// console.log(sum(1, 5));
// console.log(sum(1));
// console.log(sum());
