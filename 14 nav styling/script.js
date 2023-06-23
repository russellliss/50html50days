 
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
    /*console.log(nav);*/
    nav.classList.toggle('active');
});
