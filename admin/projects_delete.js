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
                let form = document.getElementById('form_admin_delete')
                form.id.value = id;
                form.name_project.value = data.name_project;
            })
            .catch((err) => {
                console.error(err);
                alert("Error al cargar el registro");
            });
    }
    getProject(id);



// Delete Project ---------------------------------------------------------------
    addEventListener("submit", (e) => {
        e.preventDefault();
        let form = document.getElementById('form_admin_delete')

        let data = new FormData(form);
        let project = {
            name: data.get("name_project"),
            category: data.get("category"),
            description: data.get("description"),
            client: data.get("client"),
            image: data.get("image"),
        };

        function deleteProject() {
            var options = {
                body: JSON.stringify(project),
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                redirect: "follow",
            };
            fetch(url, options)
                .then((response) => response.json())
                .then((data) => {
                    data.id = project.id;
                    console.log(data);
                    alert("Registro Eliminado");
                    window.location.href = "./projects_admin.html"; // navega a productos.html
                })
                .catch((err) => {
                    console.error(err);
                    alert("Error al Eliminar");
                });
        }
        deleteProject();
    });
}
if (id == null) {
}