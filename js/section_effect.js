document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
   
    const options = {
      root: null, 
      rootMargin: '100px',
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
              } else {
                entry.target.classList.remove('in-view');
              }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });