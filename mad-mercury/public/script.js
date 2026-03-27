const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});

const btn = document.getElementById("darkBtn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});