const person1 = {
  f: "brathesh",
  l: "kumar",
  age: 24,
};

const person2 = {
  f: "rahul",
  l: "nj",
  age: 20,
};

const person3 = {
  f: "prabu",
  l: "king",
  age: 23,
};

function getFullname(location, age) {
  console.log(this.f + " " + this.l);
  console.log(`lives in ${location}`);
  console.log(`this is my ${age}`);
  console.log("");
}

function getDOB() {
  const date = new Date();
  console.log(date.getFullYear() - this.age);
}

// getFullname.apply(person2, ["pondy", 14]);
// getFullname.call(person2, "pondy", 14);
// getDOB.call(person3);

const person1_getDOB = getDOB.bind(person3);

person1_getDOB();
getDOB.call(person3);
