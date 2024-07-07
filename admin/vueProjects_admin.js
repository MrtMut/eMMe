const {createApp, ref, onMounted} = Vue;

createApp({
    setup() {
        const apiUrlGet = "http://127.0.0.1:5000/projects";
        const datos_apiGet = ref([]);
        const error = ref(false);

        const fetchData_apiGet = async () => {    
            try {
                const response = await fetch("http://127.0.0.1:5000/projects", {
                    method: "GET",
                    headers: {"Content-Type": "application/json"},
                    credentials: "include", // Include credentials such as cookies, authorization headers, etc.
                    mode: "cors",
                });  
                if (response.status === 401) {
                    window.location.href = "./login.html"; // Redirige a la página de inicio de sesión
                } else 
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de proyectos');
                }

                
                const dataApiGet = await response.json();

                console.log("USERNAME", dataApiGet.username);                
              
                datos_apiGet.value = dataApiGet.result;    

                //return (response.json());

            } catch (error) {
                console.error("ERROR", error);
            } finally {
            }
        };

        onMounted(fetchData_apiGet);

        return {
            apiUrlGet,
            datos_apiGet,
            error,
            fetchData_apiGet
        };
    }
}).mount('#app3');