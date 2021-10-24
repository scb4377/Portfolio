const title = document.querySelector('.title');
const translate = document.querySelector('.translate');
const header = document.querySelector('header');
const shadow = document.querySelector('.shadow');
const shadow2 = document.querySelector('.shadow2');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.links');
const hamLines = document.querySelectorAll('.line');
const projects = document.querySelectorAll('.projectContainer');
const projectPage = document.querySelector('#projects');
const github = document.querySelector('.fa-github');
const linkedIn = document.querySelector('.fa-linkedin');
const mvDemo = document.querySelector('.music-visualiser-demo');
const mvSource = document.querySelector('.music-visualiser-source');
const contactForm = document.querySelector('.contact-form');
const vh = window.innerHeight * 0.01;

//variable for window height for mobile including toolbar
document.documentElement.style.setProperty('--vh', `${vh}px`);

let headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let titleSpeed = title.dataset.speed;
    let shadowSpeed = shadow.dataset.speed;

    //title fade and lower on scroll
    title.style.transform = `translateY(${scroll * titleSpeed}px)`;
    title.style.opacity = - scroll / (headerHeight / 2) + 1;

    //shadow increase height on scroll
    shadow.style.height = `${scroll * shadowSpeed + 100}px`;

})

hamburger.addEventListener('click', () => {

    //toggle active for hamburger animation
    menu.classList.toggle('active')

    //create animation ease in of links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
    
        }
    })

    //hamburger animation
    hamLines.forEach(() => {
        if (menu.classList.contains('active')) {
            hamLines[0].style.opacity = '0';
            hamLines[1].style.transform = 'rotate(405deg)';
            hamLines[2].style.transform = 'rotate(-405deg) translateY(-4px) translateX(4px)'
        } else {
            hamLines[0].style.opacity = '1';
            hamLines[1].style.transform = '';
            hamLines[2].style.transform = '';
        }
    })
})

//github link
github.addEventListener('click', () => {
    window.open('https://github.com/scb4377', '_blank');
})

//linkedin link
linkedIn.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/sblevinskw', '_blank');
})

//musicVisualizer demo link
mvDemo.addEventListener('click', () => {
    window.open('https://scb4377.github.io/MusicVisualizer/', '_blank');
})

//musicVisualizer github source link
mvSource.addEventListener('click', () => {
    window.open('https://github.com/scb4377/MusicVisualizer', '_blank');
})

//Add submitform listener
window.addEventListener('submit', submitForm);

//Submit form
function submitForm() {

    //Grab form values
    let fname = document.querySelector('#fname').value;
    let lname = document.querySelector('#lname').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    //create object to pass emailJS
    let messageObject = {
        name: fname + " " + lname,
        email: email,
        message: message
    }

    sendEmail(messageObject);

    //Clear form on submit
    contactForm.reset();
}

function sendEmail(templateParams) {

    //emailJS
    emailjs.send('service_kxar6ow', 'template_m2vhmlq', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}




