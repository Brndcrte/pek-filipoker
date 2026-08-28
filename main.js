document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    function closeMenu() {
        if (!navMenu) return;
        navMenu.classList.remove('open');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    }

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = navMenu.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('open') && !nav.contains(e.target)) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeMenu();
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) closeMenu();
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            closeMenu();
        });
    });

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const price = this.querySelector('.product-price').textContent;
        });
    });

    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('.category-title').textContent;
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
