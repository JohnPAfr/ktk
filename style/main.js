/* MENU TOGGLE */

const selectElem = (elem) => document.querySelector(elem);
const menuToggle = selectElem('.menu-toggle');

selectElem('.menu-toggle').addEventListener('click', () => {
  selectElem('header').classList.toggle('menu-open');
}); 

/* NAV ITEM CLICKED --> close the menu */

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        /* let content = ".";
        content += link.textContent.toLowerCase();
        let y = selectElem(content).getBoundingClientRect().y; */
        selectElem('header').classList.toggle('menu-open');
    })
})

/* SCROLLREVEAL */

ScrollReveal().reveal('.container', { 
    duration: 1000,
    distance: '30px',
    origin: 'top',
    viewFactor: .7,
 });

/* SCROLLSPY FOR NAVBAR COLOR CHANGE */
const logo = selectElem('.logo');
const services = selectElem('.services');

let isWhite = (elem) => {
    return elem.classList.contains('white');
}
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            logo.classList.add('white');
            menuToggle.classList.add('white');
        } else if (isWhite(logo)) {
            logo.classList.remove('white');
            menuToggle.classList.remove('white');
        }
    })
}

const ratio = .5;
const h = window.innerHeight;
const y = Math.round(h * ratio);

let options = {
    rootMargin: `-45px 0px ${-h + 46}px 0px`
}

const observer = new IntersectionObserver(callback, options);

observer.observe(services);

