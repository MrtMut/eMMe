// This file is used to display the version of the application on the home page.
let version_app = '1.0.5';
document.getElementById("version").innerText = `v${version_app}`;


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))