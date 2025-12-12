function validateForm() {
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");


if (name && name.value.trim() === "") {
alert("Name cannot be empty");
return false;
}
if (email.value.trim() === "") {
alert("Email cannot be empty");
return false;
}
if (!email.value.includes("@")) {
alert("Enter a valid email");
return false;
}
if (password && password.value.length < 6) {
alert("Password must be at least 6 characters");
return false;
}
alert("Form submitted successfully!");
return true;
}


// Example dynamic job loading
const jobs = [
"Frontend Developer - Remote",
"Backend Developer - Bengaluru",
"Data Analyst - London"
];


function loadJobs() {
const list = document.getElementById("jobList");
if (!list) return;


jobs.forEach(job => {
let li = document.createElement("li");
li.innerHTML = `<a href='job-details.html'>${job}</a>`;
list.appendChild(li);
});
}

window.onload = loadJobs;