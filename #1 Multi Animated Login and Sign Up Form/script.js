let container = document.getElementById('container');
let registerBtn = document.getElementById('register');
let loginBtn = document.getElementById('login');

const buttons = [registerBtn, loginBtn];

buttons.forEach(button => {
    button.onclick = function() {
        const action = this.id === 'register' ? 'add' : 'remove';
        container.classList[action]('active');
    };
});