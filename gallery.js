const buttons = document.querySelectorAll(".choices button");
const screen = document.getElementById("screen");
const caption = document.getElementById("screen-caption");

for (const button of buttons) {
  button.addEventListener("click", () => {
    for (const option of buttons) {
      option.setAttribute("aria-pressed", String(option === button));
    }
    const title = button.querySelector("strong").textContent;
    const image = button.dataset.screen;
    screen.src = `assets/${image}.png`;
    screen.alt = `Tela do LearnLoop — ${title}`;
    caption.textContent = image.startsWith("simulado-") ? `${title} · Tela simulada` : title;
  });
}
