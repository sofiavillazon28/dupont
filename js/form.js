
document.addEventListener('DOMContentLoaded', function () {

    /* ==== Toggle de tabs ==== */
    const tabs = document.querySelectorAll('#js-tabs .tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('is-active'));
            tab.classList.add('is-active');
        });
    });

    /* ==== Slider de plazo ==== */
    const slider = document.getElementById('js-slider');
    const chip = document.getElementById('js-plazo-chip');

    const updateChip = () => chip.textContent = `${slider.value} MESES`;
    slider.addEventListener('input', updateChip);
    updateChip(); // inicial


});