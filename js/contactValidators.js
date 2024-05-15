
const contactValidators = () => {
    const name = document.querySelector(".name");
    const completeName = document.querySelector("#completeName");
    completeName.addEventListener('input', (event) => {
        let valueInput = event.target.value
        if (valueInput.length == 0) {
            name.style.display = 'none';
        } else if (valueInput.length < 3 || valueInput.length > 40) {
            name.style.display = 'block';
        } else if (valueInput.length > 3 && valueInput.length <= 40)
            name.style.display = 'none';
    });
}

const emailValidators = () => {
    const email = document.getElementById("email");
    const errEmail = document.querySelector('.email');
    email.addEventListener('input', (event) => {
        valueEmail = event.target.value
        const validatorsEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log(validatorsEmail.test(valueEmail))
        if (!validatorsEmail.test(valueEmail)) {
            errEmail.style.display = 'block';
        } else {
            errEmail.style.display = 'none';
        }
    });

}

const phoneValidators = () => {
    const phone = document.querySelector(".phone");
    const phoneInput = document.querySelector("#phone");
    phoneInput.addEventListener('input', (event) => {
        let valueInput = event.target.value
        if (valueInput.length == 0) {
            phone.style.display = 'none';
        } else if (valueInput.length < 7 || valueInput.length > 15) {
            phone.style.display = 'block';
        } else if (valueInput.length > 7 && valueInput.length <= 15)
            phone.style.display = 'none';
    });
}

document.querySelector('#contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const Name = document.getElementById('completeName').value;
    const errname = document.querySelector(".name");
    const email = document.getElementById("email").value;
    const errEmail = document.querySelector('.email');
    const form_send = document.querySelector(".form_send");
    const phoneInput = document.querySelector("#phone").value;
    const errphone = document.querySelector(".phone");
    
    if (Name.trim() === '') {
        errname.style.display = 'block';
        Name.focus();
    } else if (email.trim() === '') {
        errEmail.style.display = 'block';
    } else if (phoneInput.trim() === '') {
        errphone.style.display = 'block';
    }else{
        form_send.setAttribute('data-bs-toggle', 'modal');
        form_send.setAttribute('data-bs-target', '#exampleModal');
        document.getElementById('completeName').value = '';
        document.getElementById("email").value = '';
        // this.submit();
        
    }
   
});


contactValidators();
emailValidators();
phoneValidators();