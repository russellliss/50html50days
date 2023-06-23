 
const labels = document.querySelectorAll('.form-control label');

labels.forEach( label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
        .join('')
})

const email = document.getElementById('email_label');

email.addEventListener('click', () => {
    document.getElementById('email_field').focus();    
})

const password = document.getElementById('password_label');

password.addEventListener('click', () => {
    document.getElementById('password_field').focus();    
})