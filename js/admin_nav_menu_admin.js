document.addEventListener('DOMContentLoaded', function () {
    // Ensure the element exists before trying to set its innerHTML
    let username = localStorage.getItem('username');


    // Elemento nav_menu_admin ADMIN
    let nav_menu_admin = document.getElementById("nav_menu_admin");
    if (nav_menu_admin) {
        nav_menu_admin.innerHTML = `<ul class="nav_menu_items_admin">
        <li class=" nav_menu_link_admin nav_menu_username">Usuario: ${username}</li>
        <li class=" nav_menu_item_admin"><a class="nav_menu_link nav_menu_link_admin"  href="./projects_admin.html">Proyectos </a></li>
        <li class=" nav_menu_item_admin"><a class="nav_menu_link nav_menu_link_admin" href="./create.html">Create</a></li>
        <li class=" nav_menu_item_admin"><a class="nav_menu_link nav_menu_link_admin" href="./user_manager.html">Usuarios</a></li>
        <li class=" nav_menu_item_admin"><a class="nav_menu_link nav_menu_link_admin log_reg_color" href="javascript:void(0)" onclick="logOut()">Salir</a></li>
        </ul>`;
    }

    // Elemento nav_menu_user USER
    let nav_menu_user = document.getElementById("nav_menu_user");
    if (nav_menu_user) {
        nav_menu_user.innerHTML = `<ul class="nav_menu_items_user">
        <li class=" nav_menu_link_admin nav_menu_username">Usuario: ${username}</li>
        <li class=" nav_menu_item_admin"><a class="nav_menu_link nav_menu_link_admin"  href="./projects_user.html">Proyectos </a></li>
        <li class=" nav_menu_item_admin"><a class="nav_menu_link nav_menu_link_admin log_reg_color" href="javascript:void(0)" onclick="logOut()">Salir</a></li>
        </ul>`;
    }


    // Elemento nav_menu_admin_login LOGIN REGISTER
    let nav_menu_admin_login = document.getElementById("nav_menu_admin_login");
    if (nav_menu_admin_login) {
        nav_menu_admin_login.innerHTML = `<ul class="nav_menu_items_user">
    <li class=" nav_menu_item_admin"><a class="nav_menu_link nav_menu_link_admin log_reg_color" href="./login.html">Login</a></li>
    <li class=" nav_menu_item_admin"><a class="nav_menu_link nav_menu_link_admin log_reg_color" href="./register.html">Register</a></li>
    </ul>`;
    }
})

async function logOut() {

    try {
        const response = await fetch("http://127.0.0.1:5000/logout", {
            method: "GET",
            credentials: "include", // Ensure cookies are sent with the request
        });

        if (response.status === 401) {
            window.location.href = './login.html';
        }

        const data = await response.json();

        console.log("DATA", data);
        console.log("DATA logged_in", data.logged_in);
        console.log('dataSTATUS', data.status);

        if (data.logoutStatus === 'success') {
            localStorage.setItem("loggedIn", false);
            localStorage.setItem("username", ''); // Guardar nombre de usuario
            window.location.href = './login.html';
        }
    } catch (error) {
        console.error("Error checking login status:", error);
    } finally {
    }
}
