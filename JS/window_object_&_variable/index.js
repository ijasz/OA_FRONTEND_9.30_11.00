console.log("hello js");
console.log("");

// var a = 10;
// window.b = 20;
// c = 30;

// console.log(window.a);
// console.log(a);
// console.log(b);
// console.log(window.b);
// console.log(c);

// function name() {
//     a = 10;
//     console.log(a, "inside func");
// }

// name()

// {
//     var a = 10;
// }


// console.log(a, "outside func");



// {
//     // block scope
//     var a = 20;
//     console.log(a);
// }


// reassignable

// var a;

// a = 10;
// a = "changed";


// console.log(typeof a);
// console.log(a);


// redeclarable

// var a = 10;
// var a = 20;

// console.log(typeof a);
// console.log(a);


var doc = window.document;
var h1 = doc.body.getElementsByTagName("h1");
// var arr = ["a", "b", "c"];

// console.log(arr[0]);
// console.log(arr[2]);


// console.log(doc.head);
// console.log(doc.body);
// console.log(h1);

h1[0].style.backgroundColor = "orange"
h1[0].style.color = "white";
h1[0].style.textAlign = "center";
h1[0].style.fontVariant = "small-caps";

h1[1].style.color = "black"
h1[1].style.textAlign = "center";
h1[1].style.fontVariant = "small-caps";
h1[1].innerHTML = h1[1].textContent + " " + "Kumar" + "&#128571"
// h1[1].textContent = h1[1].textContent + " " + "Kumar" + "&#128571"

h1[2].style.backgroundColor = "green"
h1[2].style.color = "white";
h1[2].style.textAlign = "center";
h1[2].style.fontVariant = "small-caps";

// console.log(h1[1]);
// console.log(h1[2]);