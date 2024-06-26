const {createApp, ref, onMounted} = Vue;
createApp({
    setup() {
        const apiUrlPost = "http://127.0.0.1:5005/projects";
        const datos_apiGet = ref([]);
        const error = false;

        const fetchData_apiGet = async () => {
            try {
                const response = await fetch(apiUrlPost);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos_randomUser');
                }
                const jsonDataApiGet = await response.json();
                datos_apiGet.value = jsonDataApiGet;
            } catch (error) {
                console.error(error);
            }
        };

        onMounted(fetchData_apiGet);

        return {
            apiUrlPost,
            datos_apiGet,
            error,
            fetchData_apiGet
        };
    }
}).mount('#app2');