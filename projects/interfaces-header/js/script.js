// Interacciones compartidas entre los 18 prototipos

document.addEventListener("DOMContentLoaded", () => {
  // Burger genérico (abre/cierra overlay o sidebar)
  document.querySelectorAll("[data-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetSel = btn.getAttribute("data-toggle");
      const target = document.querySelector(targetSel);
      if (target) target.classList.toggle("is-open");
    });
  });

  // Cerrar overlay con la tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".overlay-menu.is-open").forEach((el) => el.classList.remove("is-open"));
    }
  });
});
