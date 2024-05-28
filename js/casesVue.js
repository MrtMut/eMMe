const { createApp } = Vue

createApp({
    data() {
        return {
            url: "https://randomuser.me/api/?results=4&nat=es&inc=gender,name,dob,picture&noinfo",
            datos: [],
            error: false,
            caseText: ['"Equipo de trabajo muy profesional, responsable y comprometido. Diseño muy' +
            ' bueno, la experiencia del usuario es excelente y el producto es de calidad."',
                        '"El equipo de eMMe es muy profesional. Gran diseño, la experiencia del usuario es fenomenal' +
                        ' y el producto es de gran calidad. Me encantó la atención y la calidad del producto."',
                        '"Excelente diseño, muy profesionales. El equipo de trabajo es muy amable y' +
                        ' comprometido ' +
                        'con el proyecto. Me encantó la atención y la calidad del producto."', '"Genial' +
                ' equipo de' +' trabajo, muy responsable. Comprometidos con el' +
                ' proyecto. Muy buen diseño, ' + ' y el producto es de' +  ' calidad."'],
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(
                    data => {
                        // console.log(data)
                        this.datos = data
                    }
                )
                .catch(error => {
                    console.log("Error:", error)
                    this.error = true
                });
        }
    },
    created() {
        this.fetchData(this.url)
    }
}).mount('#app')

