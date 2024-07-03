console.log("LOCATION", location.search); // lee los argumentos pasados a este formulario
let queryString = location.search; // producto_update.html?id=1

let params = new URLSearchParams(queryString);
console.log("PARAMS", params); // lee los argumentos pasados a este formulario

let id = params.get("id");
console.log("ID", id);

let url;

if (id) {
    url = "http://127.0.0.1:5000/projects/" + id;

// Get Project -----------------------------
    function getProject() {
        return fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("DATA", data);
                let form = document.getElementById('form_admin_put')
                form.id.value = id;
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
    getProject(id);



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
            fetch(url, options)
                .then((response) => response.json())
                .then((data) => {
                    data.name_project = project.name_project;
                    data.category = project.category;
                    data.description = project.description;
                    data.client = project.client;
                    data.image = project.image;
                    console.log(data);
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
if (id == null) {
}