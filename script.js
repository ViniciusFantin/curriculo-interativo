let trilho = document.getElementById("trilho");
let body = document.querySelector("body");
let icone = document.getElementById("icone");

trilho.addEventListener("click", () => {
  trilho.classList.toggle("dark");
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    icone.classList.remove("bi-brigtness-hhigh-fill");
    icone.classList.add("bi-moon-fill");
  } else {
    icone.classList.remove("bi-moon-fill");
    icone - classList.add("bi-brightness-high-fill");
  }
});

// fazendo a parte do controlador do "colapse"

function setPanelHeight(panel, expanded) {
  if (!panel) return;
  if (expanded) {
    panel.style.maxHeight = panel.scrollHeight + "px";
  } else {
    panel.style.maxHeight = "0px";
  }
}

function initAccordion() {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach((header) => {
    const panelId = header.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);

    // iniciando "fechado"
    header.setAttribute("aria-expanded", "false");
    setPanelHeight(panel, false);

    header.addEventListener("click", () => {
      const isExpanded = header.getAttribute("aria-expanded") === "true";
      header.setAttribute("aria-expanded", String(!isExpanded));
      setPanelHeight(panel, !isExpanded);
    });
  });

  window.addEventListener("resize", () => {
    document
      .querySelectorAll(".accordion-header[aria-expanded='true']")
      .forEach((header) => {
        const panel = document.getElementById(
          header.getAttribute("aria-controls")
        );
        setPanelHeight(panel, true);
      });
  });
}
//  chamada para o dom depois que resgata os elementos

document.addEventListener("DOMContentLoaded", initAccordion);
