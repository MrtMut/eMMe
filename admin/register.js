// POST =================================================================================
document.addEventListener("DOMContentLoaded", function (e) {

    const url_base = "http://127.0.0.1:5000";

    let form_register = document.getElementById('form_register');
    if (form_register) {
        form_register.onsubmit = function (e) {
            e.preventDefault();
            // Lógica del formulario
            let formData = new FormData(this);
            let jsonData = {};
            for (let [k, v] of formData.entries()) {
                jsonData[k] = v;
            }
            const fetchDataPost = async (jsonData) => {
                await fetch(`${url_base}/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(jsonData),
                    credentials: "include", // Include credentials such as cookies, authorization headers, etc.
                    mode: "cors",
                })
                .then((res) => res.json())
                .then((response) => {
                 if (response){
                    alert("Usuario registrado correctamente");
                    window.location.href = './login.html'
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
