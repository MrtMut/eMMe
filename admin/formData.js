// POST =================================================================================
document.addEventListener("DOMContentLoaded", function (e) {
    let form_admin_post = document.getElementById('form_admin_post');
    if (form_admin_post) {
        form_admin_post.onsubmit = function (e) {
            e.preventDefault();
            // Lógica del formulario
            let formData = new FormData(this);
            let jsonData = {};
            for (let [k, v] of formData) {
                jsonData[k] = v;
            }
            console.log('Formulario enviado');

            const fetchDataPost = async (jsonData) => {
                await fetch(form_admin_post.action, {
                    method: "POST", // or 'PUT'
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(jsonData), // data can be `string` or {object}!
                    mode: "cors",
                    credentials: "include"
                })
                    .then((response) => {
                    
                            if (response.status === 401) {
                                window.location.href = "./login.html"; // Redirige a la página de inicio de sesión
                            }
                            return (response.json())})

                    .catch((error) => console.log("Error al enviar los datos:", error))
                    .then((response) => console.log("Exitoso:", response));
            }
            fetchDataPost(jsonData);
        };
    }


});


/* // PUT =================================================================================
document.addEventListener("DOMContentLoaded", function (e) {
    let form_admin_put = document.getElementById('form_admin_put');
    if (form_admin_put) {
    form_admin_put.onsubmit = function (e) {
        e.preventDefault();
        let formData = new FormData(this);
        let jsonData = {};
        for (let [k, v] of formData) {
            jsonData[k] = v;
        }

        let id_put = jsonData.id;
        delete jsonData.id;

        const fetchDataPut = async (jsonData) => {
            await fetch(`http://127.0.0.1:5000/projects/${id_put}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(jsonData), // data can be `string` or {object}!
                credentials: "include",
                mode: 'cors'
            })
                .then((res) => {
                    res.json()
                    console.log("DATA:", data);
                    formUpdated = document.getElementById("form_admin_put");
                    document.getElementById('name').value = res.name_project;
                    document.getElementById('select_category_create').value = res.category;
                    document.getElementById('textarea_description_create').value = res.description;
                    document.getElementById('image').value = res.image;
                    //document.getElementById('preview_image_create_project').src = res.image;
                })
                .catch((error) => console.log("Error al enviar los datos:", error))
                .then((response) => console.log("Exitoso:", response));
        }
        fetchDataPut(jsonData);
    }
    }
}); */


/*
// DELETE =================================================================================
document.addEventListener("DOMContentLoaded", function (e) {

    let form_admin_delete = document.getElementById('form_admin_delete');
    if (form_admin_delete) {
        form_admin_delete.onsubmit = function (e) {
            e.preventDefault();
            let form_id_delete = document.querySelector('.delete_project_id__input').value;
            let id_del = form_id_delete

            const fetchDataDelete = async () => {
                await fetch(`http://127.0.0.1:5000/projects/${id_del}`, {
                    method: "DELETE", // or 'PUT'
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: "cors",
                    credentials: "include"
                })
                    .then((res) => res.json())
                    .then((response) => console.log("Exitoso:", response))
                    .catch((error) => console.log("Error al enviar los datos:", error));
                    
            }
            fetchDataDelete();
        }
    }
});*/
