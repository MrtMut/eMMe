document.addEventListener('DOMContentLoaded', () => {
    const text = "Conectate";
    const typewriterElement = document.getElementById('typewriter');
    let index = 0;

    function type() {
      if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 200);
      } else {
        
        setTimeout(() => {
          typewriterElement.textContent = '';
          index = 0;
          type();
        }, 5000);
      }
    }

    type();
  });