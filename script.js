window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff6347';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = 'white';
    });
});
