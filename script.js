const hamburger = document.getElementById('hamburger');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    links.classList.toggle('active');
});

document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        links.classList.remove('active');
    });
});