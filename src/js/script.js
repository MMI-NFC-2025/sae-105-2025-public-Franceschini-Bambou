document.addEventListener('DOMContentLoaded', () => {
    // ========== MENU ==========
    /* Recherche les icônes du menu pour l'interaction */
    const menuBtn = document.querySelector('.header__menu-btn');
    const menu = document.querySelector('#mainNav');
    const closeBtn = document.querySelector('.menu__close-btn');
    const menuLinks = document.querySelectorAll('.menu__link');

    /* Fonction pour basculer le menu entre ouvert et fermé */
    function toggleMenu() {
        /* Vérifie si le menu est déjà ouvert en regardant l'attribut aria-expanded */
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        /* Change l'état de aria-expanded à l'opposé (true devient false, false devient true) */
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        if (isExpanded) {
            /* Si le menu est ouvert, alors, on ajoute l'attribut hidden pour le masquer */
            menu.setAttribute('hidden', '');
        } else {
            /* Si le menu est fermé, alors, on retire l'attribut hidden pour l'afficher */
            menu.removeAttribute('hidden');
        }
    }

    /* Fonction pour fermer le menu */
    function closeMenu() {
        /* Défini aria-expanded à false pour indiquer que le menu est fermé */
        menuBtn.setAttribute('aria-expanded', 'false');
        /* Masque le menu en ajoutant l'attribut hidden */
        menu.setAttribute('hidden', '');
    }

    /* Lorsque le bouton du menu est cliqué, le menu s'ouvre */
    menuBtn.addEventListener('click', toggleMenu);
    /* Lorsque le bouton fermer est cliqué, le menu le menu se ferme */
    closeBtn.addEventListener('click', closeMenu);

    /* après le click, le menu se ferme */
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    /*Le MENU se trouve dans toutes les pages : 
    url :   /index.html
            /artistes.html
            /contact.html
            /infospratiques.html
            /lefestival.html
            /programmation.html
            /scenes.html
            /templateartistes.html
            /templateartistes2.html
            /templatescene.html
            /templatescene.html2
            /404.html 
            */

    // ========== CAROUSEL ==========
    /* Recherche de la boîte qui contient les boutons et les images du carousel*/
    const carousel = document.querySelector('.carousel');
    
    if (carousel) {
        /* Recherche des bouton gauche/droite du carousel */
        const prevBtn = carousel.querySelector('.carousel__button--prev');
        const nextBtn = carousel.querySelector('.carousel__button--next');
        /* Recherche des images du carousel qui vont défiler */
        const container = carousel.querySelector('.carousel__container');
        
        /* Récupère le premier élément du carousel pour calculer la distance de défilement */
        const firstItem = carousel.querySelector('.carousel__item');
        const scrollAmount = firstItem ? firstItem.clientWidth + 16 : 300; // 16px = gap

        /* Lorsque le bouton de gauche est cliqué, le carousel défile vers la gauche */
        prevBtn.addEventListener('click', () => {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        /* Lorsque le bouton de droite, le carousel défile vers la droite */
        nextBtn.addEventListener('click', () => {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
    /*Le CAROUSEL se truve sur la page :
    url : /artistes.html*/

    // ========== BOUTON VERS LE HAUT ==========
    /* Recherche du bouton qui actionne le retour en haut de page */
    const btnRetourHaut = document.getElementById('btn-retour-haut');

    if (btnRetourHaut) {
        /* Ajoute un événement au scroll pour afficher ou masquer le bouton */
        window.addEventListener('scroll', () => {
            /* Si on a scrollé plus de 300px vers le bas, le bouton s'affiche */
            if (window.pageYOffset > 300) {
                btnRetourHaut.classList.add('visible');
            } else {
                /* Si on est en haut de la page, le bouton se masque*/
                btnRetourHaut.classList.remove('visible');
            }
        });

        /* Lorsque le bouton est cliqué, on remonte en haut de la page avec un scroll fluide */
        btnRetourHaut.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
