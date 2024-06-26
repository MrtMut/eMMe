const contactValidators = () => {
    const name = document.querySelector(".name");
    const completeName = document.querySelector("#completeName");

        completeName.addEventListener('input', (event) => {
            let valueInput = event.target.value
            if (valueInput.length === 0) {
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
            let valueEmail = event.target.value
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
            if (valueInput.length === 0) {
                phone.style.display = 'none';
            } else if (valueInput.length < 7 || valueInput.length > 15) {
                phone.style.display = 'block';
            } else if (valueInput.length > 7 && valueInput.length <= 15)
                phone.style.display = 'none';
        });
}

const submit = () => { document.querySelector('#contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const completeName = document.getElementById('completeName').value;
    const nameInput = document.getElementById('completeName');
    const name = document.querySelector(".name");
    const email = document.getElementById("email").value;
    const errEmail = document.querySelector('.email');
    const phoneInput = document.querySelector("#phone").value;
    const phone = document.querySelector(".phone");
    const formCheck = document.querySelector("#accept_terms");
    const errorFormCheck = document.querySelector(".errorForm-check");
    const btn_close_modal_form = document.querySelector(".btn_close_modal_form")
    const myModal = new bootstrap.Modal(document.querySelector("#formModal"))

    if (completeName.trim() === '') {
        name.style.display = 'block';
        nameInput.focus();
    } else if (email.trim() === '') {
        errEmail.style.display = 'block';
    } else if (phoneInput.trim() === '') {
        phone.style.display = 'block';
    } else if (formCheck.checked === false) {
        errorFormCheck.style.display = 'block';
    } else if (completeName.trim() !== '' && email.trim() !== '' && phoneInput.trim() !== '' && formCheck.checked === true) {
            myModal.show();

            setTimeout(() => {
                myModal.hide();
                }, "5000");
            setTimeout(() => {
                location.reload();
                    }, "5000");
    }  
    
    btn_close_modal_form.addEventListener("click", () => {
        myModal.hide();
        location.reload();  
    })

    formCheck.addEventListener('change', function () {
        if (formCheck.checked ) {
            errorFormCheck.style.display = 'none';
        }
    });
})};
contactValidators();
emailValidators();
phoneValidators();
submit();