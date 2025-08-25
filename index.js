document.addEventListener('DOMContentLoaded', () => {
    // Fade-slide animation
    const cards = document.querySelectorAll('.fade-slide');
    const cardObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        },
        { threshold: 0.08 }
    );
    cards.forEach(card => cardObserver.observe(card));

    // Reveal animation
    const elems = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        },
        { threshold: 0.08 }
    );
    elems.forEach(el => revealObserver.observe(el));

    // Nav hide/show on scroll
    let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
    const nav = document.querySelector('nav');

    window.addEventListener(
        'scroll',
        () => {
            const currentScroll =
                window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScroll) {
                // scrolled down
                nav.classList.add('hidden');
            } else {
                // scrolled up
                nav.classList.remove('hidden');
            }

            lastScroll = currentScroll <= 0 ? 0 : currentScroll;
        },
        { passive: true }
    );

        // Mobile menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });


    // ✅ Initialize VANTA.NET *after* DOM is ready
    VANTA.NET({
        el: "#particles-js",
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x00f7ff,
        backgroundColor: 0x000328,
        points: 15.00,
        maxDistance: 20.00,
        spacing: 17.00
    });
});
