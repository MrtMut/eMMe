document.addEventListener("DOMContentLoaded", function (e) {
    let form_admin_login = document.getElementById("form_admin_login");

    const url_base = "http://127.0.0.1:5000"; // URL base para el envío de datos al servidor

    if (form_admin_login) {
        const btn_close_modal_login = document.querySelector(".btn_close_modal_login");
        const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));

        form_admin_login.onsubmit = function (e) {
            e.preventDefault();
            // Lógica del formulario
            let formData = new FormData(this);
            let jsonData = {};
            for (let [k, v] of formData) {
                jsonData[k] = v;
            }
            let remember = document.getElementById("remember-me");
            if (remember.checked) {
                jsonData["remember-me"] = true;
            } else {
                jsonData["remember-me"] = false;
            }
            console.log("DATASO", jsonData);

            const fetchDataPost = async (jsonData) => {             

                try {
                    const res = await fetch(`${url_base}/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(jsonData), // data can be `string` or {object}!
                        credentials: "include", // Include credentials such as cookies, authorization headers, etc.
                        mode: "cors",
                    })   
                    
                    const data = await res.json();

                    if (res.status === 401) {
                        //const data = await res.json();
                        //window.location.href = "./login.html";
                        document.querySelector(".error_message").innerHTML = data.message;
                        loginModal.show();

                    } else if (res.status === 200) {

                        //console.log("DATAlog", data);

                        document.querySelector(".error_message").innerHTML = data.message;
                        if (data.loginStatus === "success") {
                            localStorage.setItem("loggedIn", true);
                            localStorage.setItem("username", data.username); // Guardar nombre de usuario
                            location.href = data.username === "admin" ? "./projects_admin.html" : "./projects_user.html";
                        }

                    }
                } catch (error) {
                    console.log("Error al enviar los datos:", error);
                } finally {
                }
            };
            fetchDataPost(jsonData);
        };
        btn_close_modal_login.addEventListener("click", () => {
            loginModal.hide();
            //location.reload();
        });
    }


    async function checkLoginStatus() {  
    
        try {
            const response = await fetch(`${url_base}/check_login`, {
                method: "GET",
                credentials: "include", // Ensure cookies are sent with the request
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
            });
            const data = await response.json();

            //console.log("DATA", data);
            //console.log("DATA logged_in", data.logged_in);

            if (data.logged_in === true) {
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("username", data.username); // Guardar nombre de usuario
                location.href = data.username === "admin" ? "./projects_admin.html" : "./projects_user.html";
            }
        } catch (error) {
            console.error("Error checking login status:", error);
        } finally {
        }
    }
    checkLoginStatus();  
}
);