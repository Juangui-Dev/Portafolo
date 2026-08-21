// ============================================
// NAVEGACIÓN ENTRE PESTAÑAS (paneles tipo editor)
// ============================================
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const navLinks = document.querySelectorAll("[data-nav]");

function activarPanel(id) {
  panels.forEach(p => p.classList.toggle("active", p.id === id));
  tabs.forEach(t => t.classList.toggle("active", t.dataset.target === id));
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => activarPanel(tab.dataset.target));
});

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    activarPanel(link.dataset.nav);
  });
});

// ============================================
// EFECTO DE ESCRITURA EN EL SUBTITULO
// ============================================
const frases = [
  "// estudiante de software",
  "// aprendiendo Git y GitHub",
  "// construyendo cosas, un commit a la vez"
];

const typedEl = document.getElementById("typed");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (typedEl && !prefersReducedMotion) {
  let fraseIndex = 0;
  let charIndex = 0;
  let borrando = false;

  function ciclo() {
    const fraseActual = frases[fraseIndex];

    if (!borrando) {
      typedEl.textContent = fraseActual.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === fraseActual.length) {
        borrando = true;
        setTimeout(ciclo, 1600);
        return;
      }
    } else {
      typedEl.textContent = fraseActual.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        borrando = false;
        fraseIndex = (fraseIndex + 1) % frases.length;
      }
    }
    setTimeout(ciclo, borrando ? 35 : 65);
  }
  ciclo();
} else if (typedEl) {
  typedEl.textContent = frases[0];
}
