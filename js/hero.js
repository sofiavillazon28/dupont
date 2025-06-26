document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.nav.prev');
    const next = document.querySelector('.nav.next');
    const sub = document.querySelector('.hero-sub');
    const title = document.querySelector('.hero-title');

    if (!slides.length || !prev || !next) {
        console.warn('Slider: elementos no encontrados');
        return;
    }

    let idx = 0;
    let timer;

    function render(i) {
        slides.forEach((s, n) => s.classList.toggle('active', n === i));
        title.innerHTML = slides[i].dataset.title;
        sub.innerHTML = slides[i].dataset.sub;
        idx = i;
        reset();
    }

    function nxt() { render((idx + 1) % slides.length); }
    function prv() { render((idx - 1 + slides.length) % slides.length); }

    function reset() {
        clearInterval(timer);
        timer = setInterval(nxt, 5000);
    }

    prev.addEventListener('click', prv);
    next.addEventListener('click', nxt);

    render(0);

});

