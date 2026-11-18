
const slider = document.getElementById("slider");

let position = 0;

function move(direction) {
  const card = slider.querySelector("div");
  const step = card.offsetWidth + 20;
  const max = slider.scrollWidth - slider.clientWidth;

  position += direction * step;

  if (position < 0) position = max;
  if (position > max) position = 0;

  slider.scrollTo({
    left: position,
    behavior: "smooth"
  });
}

// Avtomatik carousel
setInterval(() => {
  move(1);
}, 3500);

// Navbar link bosilganda mobil menyuni yopish
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("menu");

    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
