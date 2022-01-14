const burger = document.querySelector('.burger');
const navItems = document.querySelector ('.nav__items');
const links = document.querySelectorAll ('.item');
const headerVideo = document.querySelector ('.header');


burger.addEventListener('click', () => {
    navItems.classList.toggle("open");
    headerVideo.classList.toggle("disappear")
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});