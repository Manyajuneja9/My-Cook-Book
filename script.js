// Get the elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const cards = document.querySelectorAll(".card");
// Add an event listener to the button
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase().trim();
  let found = false;
  cards.forEach((card) => {
    const cardName = card.dataset.name.toLowerCase();
    if (cardName.includes(searchTerm)) {
      card.classList.remove("hidden");
      found = true;
    } else {e
      card.classList.add("hidden");
    }
  });

  if (!found) {
    alert("No matching item found.");
  }
});

