// console.log(this);

// const obj = {
//   f: "brathesh",
//   l: "kumar",
//   getFullname: function () {
//     console.log(this.f + " " + this.l);
//   },
// };

// obj.getFullname();

// function getFullname(location, number) {
//   console.log(this.f + " " + this.l);
//   console.log(`I AM FROM ${location}`);
//   console.log(`MY NUMBER IS ${number}`);
//   console.log("");
// }

// const obj1 = {
//   f: "brathesh",
//   l: "kumar",
// };

// const obj2 = {
//   f: "xxxx",
//   l: "yyyy",
// };

// getFullname.call(obj1, "PONDY", "9876543210");
// getFullname.call(obj2, "CHENNAI", "9876543210");
// getFullname();

// let c = 0;

// function trigger(e) {
//   //   console.log("trigged", ++c);
//   //   e.innerHTML = "clicked me";
//   if (e.target.innerHTML === "clicked") {
//     e.target.innerHTML = "click";
//   } else {
//     e.target.innerHTML = "clicked";
//   }
//   //   console.log(e.target, "e");
//   console.log("");
// }

const doc = document;

// // const btn1 = document.querySelectorAll("button")[0];
// // const btn2 = document.querySelectorAll("button")[1];
// const btns = document.querySelectorAll("button");

// // console.log(btn1);
// // console.log(btn2);

// for (const i of btns) {
//   i.addEventListener("click", trigger);
// }

// btn1.addEventListener("click", trigger);
let c = 0;

doc.querySelector("button").addEventListener("click", () => {
  const newElement = doc.createElement("div");
  //   newElement.className = "center";
  //   newElement.className = "box";
  newElement.classList.add("box", "center");
  newElement.innerHTML = ++c;
  doc.body.appendChild(newElement);
  console.log(newElement);
});
