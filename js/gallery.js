
document.addEventListener('DOMContentLoaded', function () {

    /* ========= JS mínimo ========= */
    const currentImg = document.getElementById('js-current-img');
    const thumbs = Array.from(document.querySelectorAll('#js-thumbs img'));
    const prevBtn = document.getElementById('js-prev');
    const nextBtn = document.getElementById('js-next');
    let index = 0;                              // índice de la imagen activa

    /* ----- función central ----- */
    function showImage(i) {
        index = (i + thumbs.length) % thumbs.length;     // wrap-around
        const thumb = thumbs[index];
        currentImg.src = thumb.dataset.full;
        currentImg.alt = thumb.alt;
        thumbs.forEach(t => t.classList.remove('is-active'));
        thumb.classList.add('is-active');
        // opcional: autocentrar miniatura activa
        thumb.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    }

    /* ----- eventos en miniaturas ----- */
    thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => showImage(i)));

    /* ----- flechas ----- */
    prevBtn.addEventListener('click', () => showImage(index - 1));
    nextBtn.addEventListener('click', () => showImage(index + 1));

    /* ----- control con teclado (accesibilidad extra) ----- */
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') showImage(index - 1);
        if (e.key === 'ArrowRight') showImage(index + 1);
    });

});