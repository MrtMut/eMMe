    const url_base = "http://127.0.0.1:5000";
    const url = `${url_base}/user_manager`;

    const getUser = async () => {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                mode: "cors",
            });

            const data = await response.json();
            const getUsers = await data.users;

            for (let i = 0; i < getUsers.length; i++) {
                const user = getUsers[i];
                const tbody = document.getElementById("tbody_user_manager");
                const tr = tbody.insertRow();
                const td_user_id = tr.insertCell();
                const td_user_username = tr.insertCell();
                const td_user_admin = tr.insertCell();
                const td_user_edit = tr.insertCell();


                td_user_id.innerHTML = user.id;
                td_user_username.innerHTML = user.username;
                td_user_admin.innerHTML = user.admin;
                td_user_edit.innerHTML = `<a id='updateUser_id-${getUsers[i].id}' href="#">
                <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor"
                    class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
                </a>`;
                /*  td_user_delete.innerHTML = `<a id='deleteUser_id-${getUsers[i].id}' href="#">
                <svg xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" fill="currentColor" class="bi bi-trash text-danger" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg></a>` */

                // Add event listener to the Update button
                document.getElementById(`updateUser_id-${getUsers[i].id}`).addEventListener("click", () => {
                    document.getElementById("id_userManager").value = `${getUsers[i].id}`;
                    document.getElementById("username").value = `${getUsers[i].username}`;
                    document.getElementById("is_admin").value = `${getUsers[i].admin}`;


                    
                });
            }
            return getUsers;
        } catch (error) {
            console.log("Error", error);
        }
    };
    getUser();


   



    let form_user_manager = document.getElementById('form_user_manager');

    if (form_user_manager) {        

        form_user_manager.onsubmit = function (e) {
            e.preventDefault();

            let id_user_put = document.getElementById("id_userManager").value
            let is_admin_put = document.getElementById("is_admin").value
            let urlPut = `${url_base}/user_manager/${id_user_put}`;
    
            //console.log("ID", id_user_put);
            //console.log("IS_ADMIN", is_admin_put);

            // Lógica del formulario
            let formData = new FormData(this);
            let jsonData = {};
            for (let [k, v] of formData) {
                jsonData[k] = v;
            }

            console.log("JSON_DATA-ID", jsonData);

            if (jsonData.username == "" || jsonData.is_admin_put == "") { 
                //form_admin_post.setValue();
                alert("Todos los campos son obligatorios");
                //return false;
            }

            console.log('Formulario enviado', jsonData);


            const putUser = async () => {         

                try {
                    const response = await fetch(urlPut, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        credentials: "include",
                        mode: "cors",
                        body: JSON.stringify(jsonData),
                    });
        
                    const data = await response.json();
                    console.log("PUT_USER_DATA", data);

                    if (response.status === 401) {
                        //const data = await res.json();
                        window.location.href = "./login.html";
                        document.querySelector(".error_message").innerHTML = data.message;
                    } else if (response.status === 200) {
                        alert("Usuario actualizado correctamente");
                        window.location.href = "./user_manager.html";
                    } else {
                        alert("Error al actualizar el usuario");

                    }                     
                }
                    catch (error) {
                    console.log("Error", error);
                }
            };
            putUser();
        }
    }



   

/*
const url_base = "http://127.0.0.1:5000";
const url = `${url_base}/user_manager`;

tbody_user_manager = document.getElementById("tbody_user_manager");

tbody_user_manager.innerHTML = `
<tr >
                    <td class="td_class user_id"></td>
                    <td class="td_class user_username"></td>
                    <td class="td_class user_is_admin"></td>
                    <td class="td_class user_edit"><a href="'./edit.html?id=' + elemento.id">

                        <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor"
                             class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                        </svg>
                    </a></td>
                    <td class="td_class user_delete"><a href="'./delete.html?id=' + elemento.id"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" fill="currentColor" class="bi bi-trash text-danger" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg></a></td>
                </tr>
`

*/
