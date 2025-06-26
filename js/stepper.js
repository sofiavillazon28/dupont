/* js/stepper.js */
document.addEventListener("DOMContentLoaded", () => {
    const stepper = document.getElementById("stepper");
    const steps = [...stepper.querySelectorAll(".step")];
    let current = steps.findIndex(s => s.classList.contains("is-current"));

    /** Marca el paso indicado (0-based) */
    function goTo(stepIdx) {
        if (stepIdx < 0 || stepIdx >= steps.length) return;

        // 1) Cerrar pasos anteriores
        steps.forEach((step, i) => {
            step.classList.remove("is-current", "is-done", "is-pending", "done-animate");
            if (i < stepIdx) step.classList.add("is-done", "done-animate");
            if (i === stepIdx) step.classList.add("is-current");
            if (i > stepIdx) step.classList.add("is-pending");
        });

        current = stepIdx;
    }

});
