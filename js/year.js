// This file is used to display the current year on the footer of the website.
// Display the current year on the footer
const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerText = `${year}`;