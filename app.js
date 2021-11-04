const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});

function validation() {
    var user = document.getElementById('user').addEventListener('onchange', (e) => {
        e.preventDefault();
        if (e.target.value.length < 1 or e.target.validation.length > 8)
            document.getElementById('userspan').innerHTML = " *** Username cannot be blank";
    });

}