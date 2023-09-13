document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBtn');
    const navMenu = document.getElementById('navMenu');

    // Add a click event listener to the button
    toggleBtn.addEventListener('click', function () {
        // Toggle the visibility of the navigation menu
        if (navMenu.style.display === 'none' || navMenu.style.display === '') {
            navMenu.style.display = 'block';
        } else {
            navMenu.style.display = 'none';
        }
    });
});
