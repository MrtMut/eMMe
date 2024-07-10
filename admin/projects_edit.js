let queryString_update = location.search; // producto_update.html?id=1
let params_update = new URLSearchParams(queryString_update);
let id_update = params_update.get("id");
const url_base = "http://127.0.0.1:5000";

let url_update;

if (id_update) {

    url_update = `${url_base}/projects/${id_update}`;

// Get Project -----------------------------
    function getProject() {
        return fetch(url_update, {
            method: "GET", // or 'PUT'
            headers: {"Content-Type": "application/json"},
            mode: "cors",
            credentials: "include"
            })
            .then((response) => {
                    
                if (response.status === 401) {
                    window.location.href = "./login.html"; // Redirige a la página de inicio de sesión
                }
                return (response.json())})

            .then((data) => {
                let form = document.getElementById('form_admin_put')
                form.id.value = id_update;
                form.name_project.value = data.name_project;
                form.category.value = data.category;
                form.description.value = data.description;
                form.client.value = data.user_id;
                form.image.value = data.image;
            })
            .catch((err) => {
                console.error(err);
                alert("Error al cargar el registro");
            });
    }
    getProject(id_update);

// Edit Project ---------------------------------------------------------------
    addEventListener("submit", (e) => {
        e.preventDefault();
        let form = document.getElementById('form_admin_put')
        let data = new FormData(form);
        let project = {
            name_project: data.get("name_project"),
            category: data.get("category"),
            description: data.get("description"),
            client: data.get("client"),
            image: data.get("image"),
        };
        function modificar() {
            let options = {
                body: JSON.stringify(project),
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                mode: 'cors'
            };
            fetch(url_update, options)
                .then((response) => {

                    console.log('RES', response.status)

                    if (response.status === 401) {                  
                        alert("Usuario no autenticado");
                        window.location.href = "./login.html"; // Redirige a la página de inicio de sesión
                    }
                    //return (response.json())
                    })
                .then((data) => {
                    console.log("DTA", data.status);
                    data.name_project = project.name_project;
                    data.category = project.category;
                    data.description = project.description;
                    data.client = project.client;
                    data.image = project.image;
                    alert("Registro modificado");
                    window.location.href = "./projects_admin.html"; // navega a productos.html
                })
                .catch((err) => {
                    console.error(err);
                });
        }
        modificar();
    });
}
if (id_update == null) {
}