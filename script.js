document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky navigation on scroll
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;

    function handleNavbarSticky() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', handleNavbarSticky);

    // Add active class to navigation links based on scroll position
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function highlightNavOnScroll() {
        let scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    // Add animation effects on scroll
    function revealOnScroll() {
        const elements = document.querySelectorAll('.timeline-item, .experience-card, .certificate-item, .skill-category, .link-item');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('visible');
            }
        });
    }

    // Add the visible class to CSS
    const style = document.createElement('style');
    style.textContent = `
        .timeline-item, .experience-card, .certificate-item, .skill-category, .link-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .timeline-item.visible, .experience-card.visible, .certificate-item.visible, .skill-category.visible, .link-item.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .skill-category:nth-child(1) { transition-delay: 0.1s; }
        .skill-category:nth-child(2) { transition-delay: 0.2s; }
        .skill-category:nth-child(3) { transition-delay: 0.3s; }
        .skill-category:nth-child(4) { transition-delay: 0.4s; }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', revealOnScroll);
    // Initial check for elements in view
    revealOnScroll();
}); 