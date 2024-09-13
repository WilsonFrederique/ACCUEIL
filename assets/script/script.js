const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPoput = document.querySelector('.btnLogin-popup');
const iconCloe = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPoput.addEventListener('click', ()=> {
    wrapper.classList.add('active-poput');
});

iconCloe.addEventListener('click', ()=> {
    wrapper.classList.remove('active-poput');
});