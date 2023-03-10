for (let i = 128512; i <= 128580; i++) {
    document.write(`&#${i}; ${i} <br>`)
}

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }


const arr = ["a", "b", "c", "d"]

for (const i of arr) {
    console.log(i);
}

console.log("");


const obj = {
    name: "xxx",
    age: 10,
    designation: "developer"
}

for (const key in obj) {
    console.log(obj[key]);
}

console.log("");

console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj["designation"]);

console.log("");

console.log(obj.name);
console.log(obj.age);
console.log(obj.designation);

console.log("");

let i = 1;

while (i <= 10) {
    console.log(i);
    i += 1;
}

console.log("");

let j = 1;

do {
    console.log(j);
    j += 1;
} while (j <= 10);





