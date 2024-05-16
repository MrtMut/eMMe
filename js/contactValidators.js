
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
    let completeName = document.getElementById('completeName').value;
    const name = document.querySelector(".name");
    const email = document.getElementById("email").value;
    const errEmail = document.querySelector('.email');
    const form_send = document.querySelector(".form_send");
    const phoneInput = document.querySelector("#phone").value;
    const phone = document.querySelector(".phone");
    const formCheck = document.querySelector(".contact_checkbox");
    const errorFormCheck = document.querySelector(".errorForm-check");


    if (completeName.trim() === '') {
        name.style.display = 'block';
        completeName.focus();
    } else if (email.trim() === '') {
        errEmail.style.display = 'block';
    } else if (phoneInput.trim() === '') {
        phone.style.display = 'block';
    } else if (formCheck.checked === false) {
        errorFormCheck.style.display = 'block';
    } /*else {
        // form_send.setAttribute('data-bs-toggle', 'modal');
        // form_send.setAttribute('data-bs-target', '#formModal');
        // this.submit();
    }*/

    if (completeName.trim() === '' || email.trim() === '' || phoneInput.trim() === '' || formCheck.checked === false) {
        form_send.setAttribute('data-bs-toggle', 'modal');
        form_send.setAttribute('data-bs-target', '#formModal');
    }




});

contactValidators();
emailValidators();
phoneValidators();
