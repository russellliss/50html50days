const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

setBgToBody();

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[activeSlide].classList.add('active');
}

rightBtn.addEventListener('click', () => {
    activeSlide++;
    if (activeSlide >= slides.length - 1) {
        activeSlide = 0;
    }
    setBgToBody();
    setActiveSlide();
});

leftBtn.addEventListener('click', () => {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    setBgToBody();
    setActiveSlide();
});






/* my attemps */
/*
changeSlide(current);

function changeSlide(c) {

    slides.forEach(slide => {
        slide.classList.remove('active');

    
    });

    slides[c].classList.add('active');

    const body = document.getElementById('body');
    
    // body.style.backgroundImage = `${slides[c].style.backgroundImage};`
}


left.addEventListener('click', () => {
    current--;
    if (current <= 0) {
        current = 4;
    }
    changeSlide(current);
    console.log(current);
});

right.addEventListener('click', () => {
    current++;
    if (current >= 5) {
        current = 0;
    }
    changeSlide(current);
    console.log(current);
});

*/