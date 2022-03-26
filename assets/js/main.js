const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const pwd = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = pwd.value.trim();

    if (firstNameValue === '') {
        errorValidation(firstName, 'First Name cannot be empty')
    }else {
        successValidation(firstName);
    }

    if (lastNameValue === '') {
        errorValidation(lastName, 'Last Name cannot be empty')
    }else {
        successValidation(lastName);
    }

    if (emailValue === '') {
        errorValidation(email, 'Looks like this is not an email')
        document.getElementById('email').placeholder = "email@example/com";
    }else {
        successValidation(email);
    }

    if (passwordValue === '') {
        errorValidation(pwd, 'Password cannot be empty')
    }else {
        successValidation(pwd);
    }

}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}