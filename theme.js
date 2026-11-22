const themeKey = "learnloop-theme";
const page = document.documentElement;

try {
  if (localStorage.getItem(themeKey) === "light") page.dataset.theme = "light";
} catch {
  // The toggle still works for this visit when storage is unavailable.
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".theme-toggle");
  const label = toggle.querySelector(".theme-label");
  const icon = toggle.querySelector(".theme-icon");
  const updateButton = () => {
    const light = page.dataset.theme === "light";
    label.textContent = light ? "Tema escuro" : "Tema claro";
    icon.textContent = light ? "☾" : "☀";
  };

  updateButton();
  toggle.hidden = false;

  toggle.addEventListener("click", () => {
    const light = page.dataset.theme !== "light";
    page.dataset.theme = light ? "light" : "dark";
    updateButton();
    try {
      localStorage.setItem(themeKey, page.dataset.theme);
    } catch {
      // Storage may be disabled by the browser.
    }
  });
});
