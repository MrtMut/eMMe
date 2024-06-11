
let admin_footer = document.getElementById("admin_footer");
admin_footer.innerHTML = `<div class="footer_section_links">
        <ul class="footer_links_left">
            <li class="admin_links"><a href="../admin/login.html">Login</a></li>
            <li class="admin_links"><a href="../admin/register.html">Register</a></li>
            <li class="admin_links"><a href="../admin/proyectos.html">Proyectos</a></li>
        </ul>
        <ul class="footer_links_right">
            <li class="admin_links"><a href="../admin/create.html">Create</a></li>
            <li class="admin_links"><a href="../admin/edit.html">Edit</a></li>
            <li class="admin_links"><a href="../admin/delete.html">Delete</a></li>

        </ul>
    </div>
    <p class="copy"> &copy; Copyright {eMMe} <span id="year"></span> - <span id="version"></span> </p>`;