document.addEventListener('DOMContentLoaded', () => {
    // Fade-slide animation
    const cards = document.querySelectorAll('.fade-slide');
    const cardObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.isIntersecting
                ? entry.target.classList.add('in-view')
                : entry.target.classList.remove('in-view');
        });
    }, { threshold: 0.08 });
    cards.forEach(card => cardObserver.observe(card));

    // Reveal animation
    const elems = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.isIntersecting
                ? entry.target.classList.add('in-view')
                : entry.target.classList.remove('in-view');
        });
    }, { threshold: 0.08 });
    elems.forEach(el => revealObserver.observe(el));

    // Nav hide/show on scroll
    let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScroll) {
            nav.classList.add('hidden'); // scrolling down → hide
        } else {
            nav.classList.remove('hidden'); // scrolling up → show
        }
        lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    }, { passive: true });

    // Mobile menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 200);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        document.querySelectorAll('.skill-category').forEach(card => {
            observer.observe(card);
        });

        // Add interactive hover effects
        document.querySelectorAll('.skill-tag').forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                tag.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            tag.addEventListener('mouseleave', () => {
                tag.style.transform = 'translateY(0) scale(1)';
            });
        });

    // Vanta.js background with adaptive settings
    const isMobile = window.innerWidth <= 768;

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
        // adjust complexity for mobile
        points: isMobile ? 10.00 : 15.00,
        maxDistance: isMobile ? 15.00 : 20.00,
        spacing: 17.00
    });
});
