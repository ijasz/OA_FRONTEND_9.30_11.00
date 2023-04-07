console.log("login page");

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(form.username.value, "-0-------------");
  //   console.log(form.password.value, "-0-------------");
  const username = form.username.value;
  const password = form.password.value;
  // Do something with the username and password, such as send them to a server for authentication
  console.log(`Username: ${username}, Password: ${password}`);
});
