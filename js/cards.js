
// setTimeout(() => {
    const container = document.querySelector('.cases-slider') 
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');

    // const media = !window.matchMedia('(min-width: 900px)').matches
    // if(media){
    //     scrollButton.forEach(element =>{
    //         element.style.display = 'none'
    //     })
    // }
    leftButton.addEventListener('click', () => {
        container.scrollLeft -= 200;
    });

    rightButton.addEventListener('click', () => {
        container.scrollLeft += 200;
    });
// }, 1000);