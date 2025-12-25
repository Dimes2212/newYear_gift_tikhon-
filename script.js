const envelopeBtn = document.getElementById("envelopeBtn");
const envelopeWrap = document.getElementById("envelopeWrap");
const gift = document.getElementById("gift");

let opened = false;

envelopeBtn.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  envelopeBtn.classList.add("is-open");

  // даём анимации открытия отыграть
  setTimeout(() => {
    envelopeWrap.classList.add("is-fading");
  }, 900);

  // после fade показываем подарок
  setTimeout(() => {
    gift.classList.add("is-visible");
  }, 1450);
});
