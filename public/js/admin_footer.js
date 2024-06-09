
let admin_footer = document.getElementById("admin_footer");
admin_footer.innerHTML = `<div class="footer_section_links">
        <ul>
            <li class="admin_links"><a href="./login.html">Login</a></li>
            <li class="admin_links"><a href="./register.html">Register</a></li>
            <li class="admin_links"><a href="./edit.html">Edit</a></li>
            <li class="admin_links"><a href="./create.html">Create</a></li>
        </ul>
    </div>
    <p class="copy"> &copy; Copyright {eMMe} <span id="year"></span> - <span id="version"></span> </p>`;