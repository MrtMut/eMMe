document.addEventListener('DOMContentLoaded', function() {
    // Ensure the element exists before trying to set its innerHTML
    username = localStorage.getItem('username');
    let nav_menu_admin = document.getElementById("nav_menu_admin");
    nav_menu_admin.innerHTML = `<ul class="nav_menu_items_admin">
    <li class=" nav_menu_item_admin nav_menu_link nav_menu_link_admin nav_menu_username"></li>
    <li class=" nav_menu_item_admin"><a class="nav_menu_link nav_menu_link_admin"  href="./projects_admin.html">Proyectos </a></li>
    <li class=" nav_menu_item_admin"><a class="nav_menu_link nav_menu_link_admin" href="./create.html">Create</a></li>
    <li class=" nav_menu_item_admin"><a class="nav_menu_link nav_menu_link_admin log_reg_color" href="./login.html">Salir</a></li>
    </ul>`;
})

document.addEventListener('DOMContentLoaded', function() {

    let nav_menu_user = document.getElementById("nav_menu_user");
    nav_menu_user.innerHTML = `<ul class="nav_menu_items_user">
    <li class=" nav_menu_item_admin nav_menu_link nav_menu_link_admin nav_menu_username"></li>
    <li class=" nav_menu_item_admin"><a class="nav_menu_link nav_menu_link_admin"  href="./projects_user.html">Proyectos </a></li>
    <li class=" nav_menu_item_admin"><a class="nav_menu_link nav_menu_link_admin log_reg_color" href="./login.html">Salir</a></li>
    </ul>`;
})

document.addEventListener('DOMContentLoaded', function() {
    let nav_menu_admin_login = document.getElementById("nav_menu_admin_login");
    nav_menu_admin_login.innerHTML = `<ul class="nav_menu_items_user">
    <li class=" nav_menu_item_admin"><a class="nav_menu_link nav_menu_link_admin log_reg_color" href="./login.html">Login</a></li>
    <li class=" nav_menu_item_admin"><a class="nav_menu_link nav_menu_link_admin log_reg_color" href="./register.html">Register</a></li>
    </ul>`;
})