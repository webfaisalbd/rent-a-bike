let menu = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scrollreveal 
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

// sr.reveal('.text',{ delay: 200, origin: 'top' })
// sr.reveal('.form-container form', { delay: 800, origin: 'top' })
// sr.reveal('.heading', { delay: 800, origin: 'top' })
// sr.reveal('.ride-container .box', { delay: 400, origin: 'top' })
// sr.reveal('.services-container .box', { delay: 400, origin: 'top' })
// sr.reveal('.about-description', { delay: 400, origin: 'bottom' })
// sr.reveal('.about-img', { delay: 400, origin: 'top' })
// sr.reveal('.reviews-container .single-review', { delay: 400, origin: 'bottom' })
// sr.reveal('.newsLetter-container', { delay: 400, origin: 'bottom' })
// sr.reveal('.copyright-icons .bx', { delay: 800, origin: 'top' })