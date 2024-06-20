document.addEventListener("DOMContentLoaded", function (e) {

    let form_admin = document.getElementById('form_admin_login');

    if (form_admin) {
        form_admin.onsubmit = function (e) {
            e.preventDefault();
            // Lógica del formulario
            let formData = new FormData(this);
            let jsonData = {};
            for (let [k, v] of formData) {
                jsonData[k] = v;
            }
            console.log('inicio de session');

            const fetchDataPost = async (jsonData) => {
                await fetch(form_admin.action, {
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