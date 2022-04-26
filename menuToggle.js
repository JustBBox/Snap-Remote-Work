const scroll = document.body;
const container = document.querySelector('.container-menu');
const hamburger = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.nav-routes');
hamburger.addEventListener('click', () => {
    container.classList.toggle('modal');
    menu.classList.toggle('open-menu');
    hamburger.classList.toggle('close-menu-button');
    scroll.style['overflow'] = scroll.style['overflow'] === 'hidden' ? 'visible' : 'hidden';
});
