document.addEventListener("DOMContentLoaded", function (e) {
    let form_admin_login = document.getElementById("form_admin_login");

    let countSessions = 0;
    if (localStorage.getItem("countSessions")) {
        countSessions = localStorage.getItem("countSessions");
    }
    countSessions++;
    localStorage.setItem("countSessions", countSessions);

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
                showSpinner();

                try {
                    const res = await fetch(form_admin_login.action, {
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
                    hideSpinner();
                }
            };
            fetchDataPost(jsonData);
        };
        btn_close_modal_login.addEventListener("click", () => {
            loginModal.hide();
            //location.reload();
        });
    }

    statusSession = localStorage.getItem("loggedIn");

    if (statusSession === "true") {

    async function checkLoginStatus() {  
        showSpinner();
    
        try {
            const response = await fetch("http://127.0.0.1:5000/check_login", {
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
            hideSpinner();
        }
    }
    checkLoginStatus();  
}
});

function showSpinner() {
    document.getElementById("spinner-container").style.display = "flex";
}

function hideSpinner() {
    document.getElementById("spinner-container").style.display = "none";
}
