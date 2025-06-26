document.addEventListener('DOMContentLoaded', function () {

    /* ——— Toggle menú móvil ─ JS mínimo ——— */
    const menuBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuBtn.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });

    /* ——— Toggle menú móvil ─ JS mínimo ——— */
    const menuIntranetBtn = document.querySelector('.menu-intranet-toggle');
    const menuIntranetBtn2 = document.querySelector('.menu-intranet-toggle2');
    const navIntranet = document.querySelector('.menu-intranet-nav');

    menuIntranetBtn2.addEventListener('click', () => {
        navIntranet.classList.toggle('sidebar--open');
    });

    menuIntranetBtn.addEventListener('click', () => {
        navIntranet.classList.toggle('sidebar--open');
    });

});

