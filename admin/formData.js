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
                })
                    .then((res) => res.json())
                    .catch((error) => console.log("Error al enviar los datos:", error))
                    .then((response) => console.log("Exitoso:", response));
            }
            fetchDataPost(jsonData);
        };
    }


});


// PUT =================================================================================
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
            await fetch(`http://127.0.0.1:5005/proyectos/${id_put}`, {
                method: "PUT", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jsonData), // data can be `string` or {object}!
                mode: "cors",
            })
                .then((res) => res.json())
                .catch((error) => console.log("Error al enviar los datos:", error))
                .then((response) => console.log("Exitoso:", response));
        }
        fetchDataPut(jsonData);
    }
    }
});


// DELETE =================================================================================
document.addEventListener("DOMContentLoaded", function (e) {

    let form_admin_delete = document.getElementById('form_admin_delete');
    if (form_admin_delete) {
        form_admin_delete.onsubmit = function (e) {
            e.preventDefault();
            let formData = new FormData(this);
            let jsonData = {};
            for (let [k, v] of formData) {
                jsonData[k] = v;
            }

            console.log("DELETE", jsonData.id)
            console.log("ACTION", form_admin_delete.action)

            let id_del = jsonData.id;

            console.log("ID", id_del)
            console.log("JSON DATA", jsonData)


            delete jsonData.id;

            console.log("JSON DATA", jsonData)


            const fetchDataDelete = async (jsonData) => {
                await fetch(`http://127.0.0.1:5005/proyectos/${id_del}`, {
                    method: "DELETE", // or 'PUT'
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(jsonData), // data can be `string` or {object}!
                    mode: "cors",
                })
                    .then((res) => res.json())
                    .catch((error) => console.log("Error al enviar los datos:", error))
                    .then((response) => console.log("Exitoso:", response));
            }
            fetchDataDelete(jsonData);
        }
    }
});