// POST =================================================================================
document.addEventListener("DOMContentLoaded", function (e) {
    let form_admin = document.getElementById('limpiar');
    if (form_admin) {
        form_admin.onsubmit = function (e) {
            e.preventDefault();
            // Lógica del formulario
            let formData = new FormData(this);
            let jsonData = {};
            for (let [k, v] of formData.entries()) {
                jsonData[k] = v;
            }
            console.log(formData)
            console.log(jsonData)
            const fetchDataPost = async (jsonData) => {
                await fetch(form_admin.action, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(jsonData),
                    mode: "cors",
                })
                .then((res) => res.json())
                .then((response) => {console.log("success:", response)
                 if (response){
                    window.location.href = '/eMMe/admin/login.html'
                 }else {
                    console.error('Registration failed:', response.message);
                    alert('Error en el registro: ' + response.message);
                }
             })
                .catch((error) => console.log("Error al enviar los datos del registro:", error));
                
            }
            fetchDataPost(jsonData);
        };
    }
});


