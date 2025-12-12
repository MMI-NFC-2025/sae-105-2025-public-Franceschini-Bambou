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
        const prevBtn = carousel.querySelector('.carousel__btn--prev');
        const nextBtn = carousel.querySelector('.carousel__btn--next');
        const container = carousel.querySelector('.carousel__container');
        const slides = carousel.querySelectorAll('.carousel__slide');
        
        let currentSlide = 0;

        function showSlide(n) {
            const transform = -n * 100;
            container.style.transform = `translateX(${transform}%)`;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }
});

