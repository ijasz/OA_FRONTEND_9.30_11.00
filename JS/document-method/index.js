const doc = document;

// Accessing a element

// console.log(doc.getElementsByTagName("h1"));
// console.log(doc.getElementsByClassName("heading"));
// console.log(doc.getElementsByName("h"));
// console.log(doc.getElementById("h1"));

// console.log(doc.querySelector(".para"));

const callback = () => {
  const box = doc.createElement("div");
  box.className = "box";
  //   box.classList.add("box");
  doc.body.appendChild(box);
};

doc.querySelector("button").addEventListener("click", callback);
