const envelopeBtn = document.getElementById("envelopeBtn");

// toggle open/close
envelopeBtn.addEventListener("click", (e) => {
  // если кликнули по кнопке скачивания — не закрываем конверт
  const a = e.target.closest("a.download");
  if (a) return;

  envelopeBtn.classList.toggle("is-open");
});

// optional: открыть по Enter/Space уже работает (button), но добавим "закрыть по Esc"
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    envelopeBtn.classList.remove("is-open");
  }
});
