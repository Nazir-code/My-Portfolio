//smooth scrolling
document.querySelectorAll('.scroll-link'). forEach(link =>{
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth'});
    
    });
});

// GSAP Animation on scroll
gsap.to('.hero-content', {
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    y: -50,
    opacity: 1,
    duration: 1,
});