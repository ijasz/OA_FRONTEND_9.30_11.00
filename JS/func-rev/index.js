console.log("Code starts");

// Function statements with return
// function func() {
//     let i;

//     for (i = 0; i < 10; i++) {
//         console.log(i);
//         if (i == 3) {
//             return
//         }
//     }

//     console.log("outside for loop");

// }

// console.log(func());


// Function Expression

// functions acts as a value
// console.log(func2);

//Differnce between Function Expression vs Function Statement

// let func1 = function name() {
//     let a = "hg"
//     console.log("hello ocean");
// }
// console.log(func1);

// function func2() {
//     let a = "fg"
//     console.log("hello ocean");
// }

// Named Function => Function Expression

// let func1 = function name () {
//     return func1;
// }

// Anonymous Function => Function Expression

// let func1 = () => {
//     return func1;
// }

// Arrow Function => Function Expression

// let arrowFunc = () => {
//     console.log("arrow func called");
// }

let arrowFunc = (a, b) => a + b

console.log(arrowFunc(2, 4));
console.log(arrowFunc());
// console.log(undefined + undefined);

// IIFE  => (Immediately Invoked Function Expression)

// (
//     () => {
//         console.log("IIFE called");
//     }
// )()
