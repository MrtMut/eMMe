const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const url = "https://randomuser.me/api/?results=10&nat=es&inc=gender,name,dob,picture&noinfo";
    const datos = ref([]);
    const error = false;
    const caseText = [
      'Equipo de trabajo muy profesional, responsable y comprometido con el proyecto. Diseño muy bueno, la experiencia del usuario es excelente y el producto es de calidad.',
      'El equipo de eMMe es muy profesional. Gran diseño, la experiencia del usuario es fenomenal y el producto es de gran calidad. Me encantó la atención y la calidad del producto.',
      'Excelente diseño, muy profesional y responsable. El equipo de trabajo es muy amable y comprometido con el proyecto. Me encantó la atención y la calidad del producto.'
    ];

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const jsonData = await response.json();
        datos.value = jsonData;
        
        const media = !window.matchMedia('(min-width: 900px)').matches
        console.log(media)
        if(media){
        setTimeout(() => {
          const container = document.querySelector('.cases-slider');
          const cards = document.querySelectorAll('.case-card');
          const totalWidth = [...cards].reduce((acc, card) => acc + card.offsetWidth, 0) + 135;
          container.scrollLeft = (totalWidth - container.offsetWidth) / 2;

          if (container) {
            container.addEventListener('scroll', () => {
              let center = container.scrollLeft + container.offsetWidth / 2;
              cards.forEach(card => {
                let cardCenter = card.offsetLeft + card.offsetWidth / 2;
                let distance = Math.abs(center - cardCenter);
                console.log('aca');
                if (distance < card.offsetWidth / 2) {
                  card.classList.add('hover');
                } else {
                  card.classList.remove('hover');
                }
              });
            })
               container.dispatchEvent(new Event('scroll'));
          }
        }, 1000); 
      }
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(fetchData);

    return {
      url,
      datos,
      error,
      caseText,
      fetchData
    };
  }
}).mount('#app');