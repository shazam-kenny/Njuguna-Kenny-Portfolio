document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const hamburgerIcon = hamburger.querySelector('i');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Toggle icon between bars and times (X)
        if (navLinks.classList.contains('active')) {
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-times');
        } else {
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a navigation link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
        });
    });

    // 2. Active Link Highlighting & Header Shadow on Scroll
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        let current = '';
        
        // Add a subtle shadow to the header when scrolling down
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.boxShadow = 'none';
        }

        // Detect which section is currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        // Apply active class to the corresponding nav link
        links.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active-link');
            }
        });
    });
});
// 3. Scroll Reveal Animations (Makes the site feel interactive)
    const revealElements = document.querySelectorAll('.section-title, .project-card, .skill-card, .timeline-item, .design-item, .contact-wrapper');
    
    // Add the base reveal class to all targeted elements
    revealElements.forEach(el => el.classList.add('reveal'));
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100; // How many pixels before the element appears
        
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };
    
    // Listen for scroll
    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on page load to catch elements already in view
    revealOnScroll();