/* js/lang-select.js */
document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("langSwitch");
    const btn = document.getElementById("langBtn");
    const menu = document.getElementById("langMenu");
    const options = [...menu.querySelectorAll("li")];

    // —— abre / cierra el menú
    btn.addEventListener("click", () => {
        const open = wrapper.classList.toggle("open");
        menu.classList.toggle("is-open", open);
        btn.setAttribute("aria-expanded", open);
    });

    // —— click en una opción
    options.forEach(opt => {
        opt.addEventListener("click", () => {
            // 1) actualiza seleccionado
            options.forEach(o => o.setAttribute("aria-selected", "false"));
            opt.setAttribute("aria-selected", "true");

            // 2) cambia etiqueta y flag en el botón
            const value = opt.dataset.value;
            const label = opt.textContent.trim();
            wrapper.dataset.lang = value;               // puedes leerlo desde tu codebase
            btn.querySelector(".label").textContent = label;
            btn.querySelector(".flag").innerHTML = opt.querySelector(".flag").innerHTML;

            // 3) cierra menú
            wrapper.classList.remove("open");
            menu.classList.remove("is-open");
            btn.setAttribute("aria-expanded", "false");

            // 4) NOTIFICA (ejemplo) — aquí dispararías tu lógica de i18n
            document.dispatchEvent(new CustomEvent("langChange", { detail: value }));
        });
    });

    // —— clic fuera cierra menú
    document.addEventListener("click", e => {
        if (!wrapper.contains(e.target)) {
            wrapper.classList.remove("open");
            menu.classList.remove("is-open");
            btn.setAttribute("aria-expanded", "false");
        }
    });
});