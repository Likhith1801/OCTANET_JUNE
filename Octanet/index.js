
const sections = document.querySelectorAll('section');

sections.forEach((section, index) => {
    section.style.transition = '0.5s';
    section.style.transform = `translateY(${index * 100}%)`;
});

// Add event listener for scrolling
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    sections.forEach((section, index) => {
        if (scrollPosition > index * 100) {
            section.style.transform = `translateY(0%)`;
        } else {
            section.style.transform = `translateY(${index * 100}%)`;
        }
    });
});