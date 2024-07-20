document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    const checkVisibility = () => {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + scrollY;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollY + windowHeight > sectionTop && scrollY < sectionBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };

    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('nav').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case sections are already in view
});
