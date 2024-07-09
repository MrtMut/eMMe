// Display the current year on the footer
const date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerText = `${year}`;