document.addEventListener("DOMContentLoaded", function(e) {

    let form_admin_post = document.getElementById('form_admin_post');
    form_admin_post.onsubmit = function(e) {
        e.preventDefault();
        let formData = new FormData(this);
        let jsonData = {};
        for (let [k, v] of formData) {
            jsonData[k] = v;
        }

        console.log("jsonData", jsonData)
        console.log("ACTION", form_admin_post.action)

        const fetchDatapost = async (jsonData) => { await fetch(form_admin_post.action , {
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
        fetchDatapost(jsonData);
    };
});