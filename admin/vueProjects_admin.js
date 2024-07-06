const {createApp, ref, onMounted} = Vue;

createApp({
    setup() {
        const apiUrlGet = "http://127.0.0.1:5000/projects";
        const datos_apiGet = ref([]);
        const error = false;

        const fetchData_apiGet = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/projects",{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include", // Include credentials such as cookies, authorization headers, etc.
                    mode: "cors",
                });
                
                if (!response.ok) {
                    new Error('Error al obtener los datos de proyectos');
                }
                const dataApiGet = await response.json();
                console.log("dataApiGet",dataApiGet)
                console.log("result",dataApiGet.result)

                datos_apiGet.value = dataApiGet;
               
            } catch (error) {
                console.log(error);
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