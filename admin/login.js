document.addEventListener("DOMContentLoaded", function (e) {

    let form_admin_login = document.getElementById('form_admin_login');
    console.log(form_admin_login)

    if (form_admin_login) {
        const btn_close_modal_login = document.querySelector(".btn_close_modal_login")
        const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
        loginModal._config.backdrop = true;


        form_admin_login.onsubmit = function (e) {
            e.preventDefault();
            // Lógica del formulario
            let formData = new FormData(this);
            let jsonData = {};
            for (let [k, v] of formData) {
                jsonData[k] = v;
            }
            let remember = document.getElementById('remember-me');
            if (remember.checked) {
                jsonData['remember-me'] = true;
            } else {
                jsonData['remember-me'] = false;
            }
            console.log("DATASO", jsonData)
            const fetchDataPost = async (jsonData) => {
                await fetch(form_admin_login.action, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(jsonData), // data can be `string` or {object}!
                    mode: "cors",
                })
                    .then((res) =>{
                        if (res.status === 401) {
                            return res.json().then((data) => {
                                loginModal.show();
                                document.querySelector('.error_message').innerHTML = data.message;



                               /* console.log("DATA message===", data.message);
                                document.querySelector('.error_message').innerHTML = data.message;*/
                            });
                            //location.href = './login.html';
                            //throw new Error('aca no entraaaaa ajaj');
                        }  if (res.status === 200){
                            return res.json().then((data) => {
                                console.log("DATA message===", data.message);
                                document.querySelector('.error_message').innerHTML = data.message;
                            });
                            //location.href = './login.html';
                            //throw new Error('aca no entraaaaa ajaj');
                        }
                    })
                    .catch((error) => console.log("Error al enviar los datos:", error));

            }
            fetchDataPost(jsonData);
        };
        btn_close_modal_login.addEventListener("click", () => {
            loginModal.hide();
            location.reload();
        })
    }
});