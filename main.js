var hamburgerButton = document.getElementById ('hamburger');
var navMenu = document.querySelector ('.nav');

function toggleMenu() {
  navMenu.classList.toggle('show-mobile-menu');
}

hamburgerButton.addEventListener ('click', toggleMenu);
