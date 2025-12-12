document.addEventListener('DOMContentLoaded', () => {
    // ========== MENU ==========
    const menuBtn = document.querySelector('.header__menu-btn');
    const menu = document.querySelector('#mainNav');
    const closeBtn = document.querySelector('.menu__close-btn');
    const menuLinks = document.querySelectorAll('.menu__link');

    function toggleMenu() {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        if (isExpanded) {
            menu.setAttribute('hidden', '');
        } else {
            menu.removeAttribute('hidden');
        }
    }

    function closeMenu() {
        menuBtn.setAttribute('aria-expanded', 'false');
        menu.setAttribute('hidden', '');
    }

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', closeMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // ========== CAROUSEL ==========
    const carousel = document.querySelector('.carousel');
    
    if (carousel) {
        const prevBtn = carousel.querySelector('.carousel__button--prev');
        const nextBtn = carousel.querySelector('.carousel__button--next');
        const container = carousel.querySelector('.carousel__container');
        
        // Récupérer la largeur du premier item pour le défilement
        const firstItem = carousel.querySelector('.carousel__item');
        const scrollAmount = firstItem ? firstItem.clientWidth + 16 : 300; // 16px = gap

        prevBtn.addEventListener('click', () => {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
});

    // ========== bouton vers le haut ==========
const btnHaut = document.getElementById('btn-retour-haut');
 if (btnHaut) {

    window.addEventListener('scroll', () => {
      const isBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50);

      if (isBottom) {
        btnHaut.classList.add('visible');
      } else {
        btnHaut.classList.remove('visible');
      }
    });

    btnHaut.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }