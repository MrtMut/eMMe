document.addEventListener("DOMContentLoaded", function (e) {

    let form_admin = document.getElementById('form_admin_login');
     console.log(form_admin)
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
            console.log(jsonData)
            const fetchDataPost = async (jsonData) => {
                await fetch(form_admin.action, {
                    method: "POST", // or 'PUT'
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(jsonData), // data can be `string` or {object}!
                    mode: "cors",
                })
                    .then((res) =>{ res.json()
                        if (res.status === 401) {
                            throw new Error('aca no entraaaaa ajaj');
                        }else  if (res.status === 200){
                           window.location.href = '/eMMe/admin/projects_admin.html'
                        }
                    })
                    .catch((error) => console.log("Error al enviar los datos:", error));
                    
            }
            fetchDataPost(jsonData);
        };
    }


});