
let admin_footer = document.getElementById("admin_footer");
admin_footer.innerHTML = `<div class="footer_section_links">      
        <ul class="footer_links_right">
            <li class="admin_links"><a href="../admin/projects_admin.html">Proyectos</a></li>
            <li class="admin_links"><a href="../admin/create.html">Create</a></li>
            <li class="admin_links"><a href="../admin/edit.html">Edit</a></li>
        </ul>
    </div>
    <p class="copy"> &copy; Copyright {eMMe} <span id="year"></span> - <span id="version"></span> </p>`;