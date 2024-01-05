const togglePasswordVisibility = (passwordInputId, eyeIconId) => {
    const input = document.getElementById(passwordInputId);
    const iconEye = document.getElementById(eyeIconId);

    iconEye.addEventListener('click', () => {
        input.type = input.type === 'password' ? 'text' : 'password';
        iconEye.classList.toggle('ri-eye-line');
        iconEye.classList.toggle('ri-eye-off-line');
    });
}
// initialize the function 
togglePasswordVisibility('login-pass', 'login-eye');