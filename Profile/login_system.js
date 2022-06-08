function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector('.form_message');    

    messageElement.textContent = message;
    messageElement.classList.remove('form_message.success', 'form_message-error');
    messageElement.classList.add(`form_message-${type}`);
}

function setInputError(inputElement, message){
    inputElement.classList.add('form_input-error');
    inputElement.parentElement.querySelector('.form_input-error-message').textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove('form_input-error');
    inputElement.parentElement.querySelector('.form_input-error-message').textContent = '';

}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login');
    const createAccountForm = document.querySelector('#createAccount');

    document.querySelector('#linkCreateAccount').addEventListener('click', (event)=> {
        event.preventDefault();
        loginForm.classList.add('form-hidden');
        createAccountForm.classList.remove('form-hidden');
    });

    document.querySelector('#linkLogin').addEventListener('click', (event)=> {
        event.preventDefault();
        loginForm.classList.add('form-hidden');
        createAccountForm.classList.remove('form-hidden');
    });

    loginForm.addEventListener('submit', (event)=> {
        event.preventDefault();

        setFormMessage(loginForm, 'error', 'Invalid username or password');
    });

    document.querySelectorAll('.form_input').forEach(inputElement => {
        inputElement.addEventListener('blur', event => {
            if(event.target.id === 'signUserName' && event.target.length > 0 && event.target.length < 10) {
                setInputError(inputElement, 'Username must be at least 10 characters in length');

            }
        });

        inputElement.addEventListener('input', event => {
            clearInputError(inputElement);
        });


    });

});