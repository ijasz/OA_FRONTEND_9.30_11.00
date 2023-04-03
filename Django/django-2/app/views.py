from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def home(req):
    return HttpResponse("""
    <!DOCTYPE html>
<html>
<head>
	<title>My Home Page</title>
	<style>
    body {
	background-color: #f2f2f2;
	font-family: Arial, sans-serif;
	margin: 0;
	padding: 0;
}

header {
	background-color: #333;
	color: #fff;
	padding: 20px;
}

nav ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

nav li {
	display: inline-block;
	margin-right: 20px;
}

nav a {
	color: #fff;
	text-decoration: none;
}

main {
	margin: 50px auto;
	max-width: 800px;
	padding: 20px;
	text-align: center;
}

h1 {
	margin-top: 0;
}

button {
	background-color: #4CAF50;
	border: none;
	border-radius: 3px;
	color: #fff;
	cursor: pointer;
	font-size: 16px;
	margin-top: 20px;
	padding: 10px;
}

button:hover {
	background-color: #3e8e41;
}

footer {
	background-color: #333;
	color: #fff;
	padding: 20px;
	text-align: center;
}

    </style>
</head>
<body>
	<header>
		<nav>
			<ul>
				<li><a href="/app/home">Home</a></li>
				<li><a href="/app/about">About</a></li>
				<li><a href="/app/contact">Contact</a></li>
			</ul>
		</nav>
	</header>
	<main>
		<h1>Welcome to my home page</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget magna nunc. Nulla facilisi. Nullam tristique nulla non risus consectetur, id congue elit faucibus. Aliquam vel libero nunc. Proin et nulla euismod, placerat felis quis, ullamcorper justo. Sed sagittis libero ut malesuada efficitur. Sed finibus auctor orci. Aenean iaculis malesuada quam, vitae malesuada arcu.</p>
		<button>Learn More</button>
	</main>
	<footer>
		<p>&copy; 2023 My Home Page</p>
	</footer>
	<script >
    const button = document.querySelector('button');
button.addEventListener('click', handleButtonClick);

function handleButtonClick() {
	alert('Thank you for your interest!');
}
</script>
</body>
</html>
    """)


def about(req):
    return HttpResponse("""
    <!DOCTYPE html>
<html>
<head>
	<title>About Us</title>
	<style>
    body {
	background-color: #f2f2f2;
	font-family: Arial, sans-serif;
	margin: 0;
	padding: 0;
}

header {
	background-color: #333;
	color: #fff;
	padding: 20px;
}

nav ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

nav li {
	display: inline-block;
	margin-right: 20px;
}

nav a {
	color: #fff;
	text-decoration: none;
}

main {
	margin: 50px auto;
	max-width: 800px;
	padding: 20px;
	text-align: center;
}

h1 {
	margin-top: 0;
}

ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	text-align: left;
}

li {
	margin-top: 10px;
}

strong {
	font-weight: bold;
}

footer {
	background-color: #333;
	color: #fff;
	padding: 20px;
	text-align: center;
}

    </style>
</head>
<body>
	<header>
		<nav>
			<ul>
					<li><a href="/app/home">Home</a></li>
				<li><a href="/app/about">About</a></li>
				<li><a href="/app/contact">Contact</a></li>
			</ul>
		</nav>
	</header>
	<main>
		<h1>About Us</h1>
		<p>We are a company that specializes in creating amazing web experiences. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget magna nunc. Nulla facilisi. Nullam tristique nulla non risus consectetur, id congue elit faucibus. Aliquam vel libero nunc. Proin et nulla euismod, placerat felis quis, ullamcorper justo. Sed sagittis libero ut malesuada efficitur. Sed finibus auctor orci. Aenean iaculis malesuada quam, vitae malesuada arcu.</p>
		<ul>
			<li><strong>Our mission:</strong> To create beautiful, functional websites that make our clients happy</li>
			<li><strong>Our vision:</strong> To be the go-to web design company for businesses of all sizes</li>
			<li><strong>Our values:</strong> Creativity, integrity, and excellence in everything we do</li>
		</ul>
	</main>
	<footer>
		<p>&copy; 2023 About Us</p>
	</footer>
	<script src="script.js"></script>
</body>
</html>
""")


def contact(req):
    return HttpResponse("""
    <!DOCTYPE html>
<html>
<head>
	<title>Contact Us</title>
	<style>
    body {
	background-color: #f2f2f2;
	font-family: Arial, sans-serif;
	margin: 0;
	padding: 0;
}

header {
	background-color: #333;
	color: #fff;
	padding: 20px;
}

nav ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

nav li {
	display: inline-block;
	margin-right: 20px;
}

nav a {
	color: #fff;
	text-decoration: none;
}

main {
	margin: 50px auto;
	max-width: 800px;
	padding: 20px;
	text-align: center;
}

h1 {
	margin-top: 0;
}

form label {
	display: block;
	margin-top: 20px;
}

input[type="text"],
input[type="email"],
textarea {
	border: 1px solid #ccc;
	padding: 10px;
	width: 100%;
}

textarea {
	height: 150px;
}

input[type="submit"] {
	background-color: #333;
	border: none;
	color: #fff;
	cursor: pointer;
	margin-top: 20px;
	padding: 10px 20px;
}

input[type="submit"]:hover {
	background-color: #555;
}

footer {
	background-color: #333;
	color: #fff;
	padding: 20px;
	text-align: center;
}

    </style>
</head>
<body>
	<header>
		<nav>
			<ul>
				<li><a href="/app/home">Home</a></li>
				<li><a href="/app/about">About</a></li>
				<li><a href="/app/contact">Contact</a></li>
			</ul>
		</nav>
	</header>
	<main>
		<h1>Contact Us</h1>
		<p>Get in touch with us using the form below:</p>
		<form id="contact-form">
			<label for="name">Name:</label>
			<input type="text" id="name" name="name" required>
			<label for="email">Email:</label>
			<input type="email" id="email" name="email" required>
			<label for="message">Message:</label>
			<textarea id="message" name="message" required></textarea>
			<input type="submit" value="Submit">
		</form>
	</main>
	<footer>
		<p>&copy; 2023 Contact Us</p>
	</footer>
	<script>
    const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	
	// Get the values of the form inputs
	const name = form.elements.name.value;
	const email = form.elements.email.value;
	const message = form.elements.message.value;
	
	// Send the form data to a backend service using AJAX or fetch
	// Here's an example using fetch:
	fetch('/api/contact', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name,
			email,
			message
		})
	})
	.then(response => {
		if (response.ok) {
			alert('Message sent successfully!');
			form.reset();
		} else {
			alert('An error occurred while sending the message. Please try again later.');
		
</script>
</body>
</html>
""")


def login(req):
    return HttpResponse("""<!DOCTYPE html>
<html>
<head>
	<title>Login Page</title>
	<style>
    body {
	background-color: #f2f2f2;
	font-family: Arial, sans-serif;
}

.container {
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	margin: 100px auto;
	max-width: 400px;
	padding: 20px;
	text-align: center;
}

h1 {
	margin-top: 0;
}

form {
	display: inline-block;
	text-align: left;
}

label {
	display: block;
	margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
	border: 2px solid #ccc;
	border-radius: 3px;
	font-size: 16px;
	padding: 10px;
	width: 100%;
}

input[type="submit"] {
	background-color: #4CAF50;
	border: none;
	border-radius: 3px;
	color: #fff;
	cursor: pointer;
	font-size: 16px;
	margin-top: 10px;
	padding: 10px;
	width: 100%;
}

input[type="submit"]:hover {
	background-color: #3e8e41;
}

    </style>
</head>
<body>
	<div class="container">
		<h1>Login</h1>
		<form>
			<label for="username">Username:</label>
			<input type="text" id="username" name="username" required>
			<label for="password">Password:</label>
			<input type="password" id="password" name="password" required>
			<input type="submit" value="Login">
		</form>
	</div>
	<script>
    const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	// Do something with the username and password here
}
</script>
</body>
</html>
""")
