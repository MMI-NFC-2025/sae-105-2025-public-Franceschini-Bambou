document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments
    const menuBtn = document.querySelector('.header__menu-btn');
    const menu = document.querySelector('#mainNav');
    const closeBtn = document.querySelector('.menu__close-btn');
    const menuLinks = document.querySelectorAll('.menu__link');

    // Fonction pour basculer le menu
    function toggleMenu() {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        if (isExpanded) {
            menu.setAttribute('hidden', '');
        } else {
            menu.removeAttribute('hidden');
        }
    }

    // Fonction pour fermer le menu
    function closeMenu() {
        menuBtn.setAttribute('aria-expanded', 'false');
        menu.setAttribute('hidden', '');
    }

    // Écouteurs d'événements
    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', closeMenu);

    // Fermer le menu lorsqu'un lien est cliqué
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});