document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector('.menu-button');
    const blackStrip = document.querySelector('.black-strip');

    // Toggle dropdown menu and rotate button
    menuButton.addEventListener('click', function () {
        const dropdown = document.querySelector('.dropdown-content');
        dropdown.classList.toggle('show');
        menuButton.classList.toggle('rotate');
    });

    // Change header style on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            blackStrip.style.opacity = 1; // Show the black strip
        } else {
            blackStrip.style.opacity = 0; // Hide the black strip
        }
    });
    
});
