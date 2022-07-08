const srcForm = document.querySelector(".srcForm");
const srcInput = document.querySelector("input");
const listEl = document.querySelector(".book-list");

srcForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const userSRC = srcInput.value.replaceAll(" ", "+");
  const BASE_URL = "https://openlibrary.org/search.json?q=";
  const COMPLETE_URL = `${BASE_URL}${userSRC};`;

  listEl.innerHTML = `<img src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg" class="spinner">`;

  fetch(COMPLETE_URL)
    .then((res) => res.json())
    .then((data) => {
      listEl.innerHTML = data.docs
        .map((item) => {
          return `<li>${item.title}</li>`;
        })
        .join("");
    });
});
