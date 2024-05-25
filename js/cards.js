document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.case-card');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Ajusta esto según sea necesario
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('hover');
        } else {
          entry.target.classList.remove('hover');
        }
      });
    }, observerOptions);
  
    cards.forEach(card => {
      observer.observe(card);
    });
  
    // Agregar la clase 'first' a la primera tarjeta
    if (cards.length > 0) {
      cards[0].classList.add('first');
    }
  });