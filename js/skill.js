

document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle_skill');
    const circles_colorous = document.querySelectorAll('.circles_colorous');
    const circle_container_a = document.querySelectorAll('.circle_container > a')
   

let variables = new Array(circle_container_a.length).fill(0);

circle_container_a.forEach((circle, i) => {
    const hoveredIndex = Array.from(circle_container_a).indexOf(circle);
    let variable = variables[i]; 

    circle.addEventListener('touchstart', (event) => {
        event.preventDefault();
        startY = event.touches[0].clientY;
        isDragging = true;
    });

    circle.addEventListener('touchmove', function (event) {
        if (isDragging) {
            const currentY = event.touches[0].clientY;
            const deltaY = startY - currentY;
            if (deltaY > 0 && variable < 100) {
                variable = Math.min(variable + 1, 100);
        
            } else if (deltaY < 0 && variable > 0) {
                variable = Math.max(variable - 1, 0);
            }
            startY = currentY;
            fillCircle(variable, i);
        }
    });

    circle.addEventListener('touchend', function () {
        isDragging = false;
        variables[i] = variable; 
        console.log(variables)
    });
});

function fillCircle(percent, index) {
    const circle = circles[index];
    const radius = parseFloat(circle.querySelector('.circle_html').getAttribute('r'));
    const circumference = 2 * Math.PI * radius;
    const porCiento = circumference * (1 - (100 - percent) / 100);
    circle.querySelector('.circle_html').style.strokeDashoffset = -porCiento;
}


variables.forEach((variable, i) => {
    fillCircle(variable, i);
    
});

});