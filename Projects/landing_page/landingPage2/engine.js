// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// scroll sectino active line 
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });

    // sticky navbar 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link (scroll)
    // menuIcon.classList.remove('bx-x');
    // navLinks.classList.remove('active');

};


// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000, 
    delay: 200
});
ScrollReveal().reveal('.home-content , .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img , .services-container, .portfolio-box , .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1', {origin: 'left'});
ScrollReveal().reveal('.about-img', {origin: 'bottom'});
ScrollReveal().reveal('.home-content p , .about-content', {origin: 'left'});

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'DSA Learner', 'Full stack Developer' , 'PC Enthusiast' , 'Tech Geek'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true,
});
