




// document.addEventListener('DOMContentLoaded', function () {
// const slider = document.querySelector('.cases-slider');
//   const slides = document.querySelectorAll('.case-card');

// // Clonar las secciones
// slides.forEach(slide => {
//     const clone = slide.cloneNode(true);
//     slider.appendChild(clone);
// });

// const checkCenterSlide = () => {

//   const center = slider.scrollLeft + slider.clientWidth / 2;

//   slides.forEach(slide => {
//     const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
//     const distance = Math.abs(center - slideCenter);
//     if (distance < slide.clientWidth / 2) {
//       slide.classList.add('hover');
//     } else {
//       slide.classList.remove('hover');
//     }
//   });
// };




// slider.addEventListener('scroll', checkCenterSlide());

// });
// const slider = document.querySelector('.cases-slider');
//   const slides = document.querySelectorAll('.case-card');

// document.addEventListener('DOMContentLoaded', () => {
//   const container = document.querySelector('.cases-slider');
//   const cards = document.querySelectorAll('.case-card');
//   console.log(container)
//   container.addEventListener('scroll', () => {
//     let center = container.scrollLeft + container.offsetWidth / 2;
    
//     cards.forEach(card => {
//       let cardCenter = card.offsetLeft + card.offsetWidth / 2;
//       let distance = Math.abs(center - cardCenter);
//       console.log('aca')
//       if (distance < card.offsetWidth / 2) {
      
//         card.classList.add('hover');
//       } else {
//         card.classList.remove('hover');
//       }
//     });
//   });

//   // Inicializar el estado en caso de que ya haya una tarjeta en el centro al cargar la página
//   container.dispatchEvent(new Event('scroll'));
// });