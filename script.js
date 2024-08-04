document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o cartão e adiciona evento de clique para flip
    const card = document.querySelector('.card');
    card.addEventListener('click', function () {
        card.classList.toggle('flip');
    });

    // Seleciona o botão do menu e os links do menu móvel
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksMobile = document.querySelector('.nav-links-mobile');

    // Adiciona evento de clique para alternar a classe "active"
    menuToggle.addEventListener('click', function () {
        navLinksMobile.classList.toggle('active');
    });
});

