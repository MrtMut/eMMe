
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
   
    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.25 
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } 
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });