// İçerikler sayfasındaki başlık araması.
// Arama yalnızca kartların başlığına bakar (açıklama ve meta metni aranmaz).

const searchInput = document.getElementById("search-input");
const clearBtn = document.getElementById("clear-btn");
const resultCount = document.getElementById("result-count");
const emptyMessage = document.getElementById("empty-message");
const cards = document.querySelectorAll("#card-list .card");

// Türkçe karakterlere duyarlı, büyük/küçük harf farkını yok sayan normalleştirme.
function normalize(text) {
  return text.toLocaleLowerCase("tr-TR").trim();
}

function filterCards() {
  const query = normalize(searchInput.value);
  let visible = 0;

  cards.forEach((card) => {
    const title = normalize(card.dataset.title);
    const match = query === "" || title.includes(query);
    card.classList.toggle("hidden", !match);
    if (match) visible += 1;
  });

  resultCount.textContent = visible + " sonuç bulundu";
  emptyMessage.classList.toggle("hidden", visible !== 0);
}

function clearSearch() {
  searchInput.value = "";
  filterCards();
  searchInput.focus();
}

if (searchInput) {
  searchInput.addEventListener("input", filterCards);
  clearBtn.addEventListener("click", clearSearch);
  filterCards();
}
