document.addEventListener('DOMContentLoaded', function () {
    const card = document.querySelector('.card');

    card.addEventListener('click', function () {
        card.classList.toggle('flip');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinksMobile = document.querySelector(".nav-links-mobile");

    menuToggle.addEventListener("click", function() {
        navLinksMobile.classList.toggle("active");
    });
});
