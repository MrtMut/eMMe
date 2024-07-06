let queryString_update = location.search; // producto_update.html?id=1

let params_update = new URLSearchParams(queryString_update);

let id_update = params_update.get("id");

let url_update;

if (id_update) {
    url_update = "http://127.0.0.1:5000/projects/" + id_update;

// Get Project -----------------------------
    function getProject() {
        return fetch(url_update)
            .then((response) => response.json())
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
            name: data.get("name_project"),
            category: data.get("category"),
            description: data.get("description"),
            client: data.get("client"),
            image: data.get("image"),
        };

        function modificar() {
            var options = {
                body: JSON.stringify(project),
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                redirect: "follow",
            };
            fetch(url_update, options)
                .then((response) => response.json())
                .then((data) => {
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
                    alert("Error al Modificar");
                });
        }
        modificar();
    });
}
if (id_update == null) {
}