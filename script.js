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
const vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

let headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let titleSpeed = title.dataset.speed;
    let shadowSpeed = shadow.dataset.speed;
    let titleAccent = document.querySelectorAll('.titleAccent');
    let scrollProject = projectPage.pageYOffset;
    // let titleAccentSpeed = titleAccent.dataset.speed;


    title.style.transform = `translateY(${scroll * titleSpeed}px)`;
    title.style.opacity = - scroll / (headerHeight / 2) + 1;


    shadow.style.height = `${scroll * shadowSpeed + 100}px`;
    
    // titleAccent.forEach(accent => {
    //     accent.style.width = `${(scroll -218)} * ${index / 7 + .5}px`
    // })

})

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active')

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
    
        }
    })

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

github.addEventListener('click', () => {
    window.open('https://github.com/scb4377', '_blank');
})

linkedIn.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/sblevinskw', '_blank');
})

