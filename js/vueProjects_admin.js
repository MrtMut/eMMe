const {createApp, ref, onMounted} = Vue;

createApp({
    setup() {
        const apiUrlGet = "http://127.0.0.1:5005/projects";
        const datos_apiGet = ref([]);
        const error = false;

        const fetchData_apiGet = async () => {
            try {
                const response = await fetch(apiUrlGet);
                
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de proyectos');
                }
                const jsonDataApiGet = await response.json();
                console.log(jsonDataApiGet)
                datos_apiGet.value = jsonDataApiGet;
               
            } catch (error) {
                console.error(error);
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