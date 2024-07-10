const queryString2 = location.search; // producto_update.html?id=1
let params2 = new URLSearchParams(queryString2);
let id_delete = params2.get("id");
const url_base_del = "http://127.0.0.1:5000"; // URL base para el envío de datos al servidor

let url_delete;

if (id_delete) {
    url_delete = `${url_base_del}/projects/${id_delete}`;

    // Get Project -----------------------------
    function getUser() {
        return fetch(url_delete, {
            method: "GET", // or 'PUT'
            headers: { "Content-Type": "application/json" },
            mode: "cors",
            credentials: "include",
        })
            .then((response) => {
                //console.log("Delete-Response", response);

                if (response.status === 401) {
                    window.location.href = "./login.html";
                }
                return response.json();
            })
            .then((data) => {
                let form = document.getElementById("form_admin_delete");
                if (form) {
                    form.id.value = id_delete;
                    form.name_project.value = data.name_project;
                } else {
                    console.error("Form not found");
                }
            })
            .catch((err) => {
                console.error(err);
                alert("Error al cargar el registro");
            });
    }
    getUser();

    // Delete Project ---------------------------------------------------------------
    document.getElementById("form_admin_delete").addEventListener("submit", (e) => {
        e.preventDefault();
        let form = document.getElementById("form_admin_delete");

        if (form) {
            let data = new FormData(form);
            let project = {
                name_project: data.get("name_project"),
                category: data.get("category"),
                description: data.get("description"),
                client: data.get("client"),
                image: data.get("image"),
            };

            function deleteProject() {
                let options = {
                    body: JSON.stringify(project),
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    redirect: "follow",
                    credentials: "include",
                };
                fetch(url_delete, options)
                    .then((response) => {
                        if (response.status === 401) {
                            alert("Usuario no autenticado");
                            window.location.href = "./login.html"; 
                        }
                        console.log("DELETE-Response", response);
                        if (response.status === 200) 
                            {                        
                                alert("Registro Eliminado");
                                window.location.href = "./projects_admin.html"; 
                            } else {
                                alert("Error al Eliminar");
                            }
                        return response.json();
                    })     
                    .catch((err) => {
                        console.error(err);
                        alert("Error al Eliminar");
                    });
            }
            deleteProject();
        } else {
            console.error("Form not found");
        }
    });
} else {
    // Manejar caso donde no hay id en la URL
    //console.log("No ID encontrada in URL");
}
