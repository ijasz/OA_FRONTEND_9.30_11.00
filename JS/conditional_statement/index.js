// if (false) {
//     console.log("if");
// } else if (false) {
//     console.log("if");
// }
// else if (true) {
//     console.log("if");
// }
// else {
//     console.log("else");
// }

// if (false) {
//     console.log(1);
// }

// if (true) {
//     console.log(2);
// }

// if (false) {
//     console.log(3);
// }

// else {
//     console.log("1 - else");
// }

// const user = "brathesh";

// console.log(`hi my self ${user}`);
// console.log("hi my self" + " " + user);

const date = new Date()
const day = ["sun", "mon", "tue", "wed", "thr", "fri", "sat"]
const mon = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]


// console.log(date.getDate(), "date");
// console.log(date.getFullYear(), "yr");
// console.log(mon[date.getMonth()], "mon");
// console.log(day[date.getDay()], "day");
// console.log(date.getHours(), "hr");
// console.log(date.getMinutes(), "min");
// console.log(date.getSeconds(), "sec");
// console.log(date.getMilliseconds(), "m");

// console.log(document.getElementsByTagName("h1")[0]);


// window.setInterval(() => {
//     const date = new Date()
//     const h1 = document.getElementsByTagName("h1")[0];
//     h1.textContent = `Sec : ${date.getSeconds()}`
//     // console.log(date.getSeconds(), "sec");
// }, 1000)


// console.log(date.getHours());
// console.log(typeof date);

// switch (date.getDay()) {
//     case 0:
//         document.getElementsByTagName("h1")[0].textContent = "sun"
//         break;
//     case 1:
//         document.getElementsByTagName("h1")[0].textContent = "mon"
//         break;
//     case 2:
//         document.getElementsByTagName("h1")[0].textContent = "tue"
//         break;
//     case 3:
//         document.getElementsByTagName("h1")[0].textContent = "wed"
//         break;
//     case 4:
//         document.getElementsByTagName("h1")[0].textContent = "Thr"
//         break;
//     case 5:
//         document.getElementsByTagName("h1")[0].textContent = "fri"
//         break;
//     case 6:
//         document.getElementsByTagName("h1")[0].textContent = "sat"
//         break;

//     default:
//         console.log("invalid");
//         break;
// }