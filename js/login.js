document.getElementById('login-btn').addEventListener('click', function () {
    const inputEmail = document.getElementById('input-email');
    const inputEmailValue = inputEmail.value;
    const inputPassword = document.getElementById('input-password');
    const inputPasswordValue = inputPassword.value;

    if (inputEmailValue == 'test@gmail.com' && inputPasswordValue == 'test') {
        window.location.href = 'bank.html';
    }

});