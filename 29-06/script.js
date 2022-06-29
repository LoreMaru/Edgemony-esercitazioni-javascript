import { q, createCard } from "./utils.js";
import { GET, POST, DELETE } from "./api.js";

const BASE_URL = "https://edgemony-backend.herokuapp.com/series";
const addSerieBtnEl = q(".add-serie");
const removeSerieBtnEl = q(".remove-serie");
const deleteInputEl = q(".delete");

const addButton = q(".add-serie");
const inputTitle = q("#title");
const imgUrl = q("#imgUrl");
const inputYear = q("#year");

addButton.addEventListener("click", () => {
  const inputTitle = q("#title").value;
  const imgUrl = q("#imgUrl").value;
  const inputYear = q("#year").value;

  const body = {
    title: inputTitle,
    favorite: false,
    genres: ["scifi"],
    new: false,
    poster: imgUrl,
    rating: 50,
    seasons: 4,
    year: inputYear,
  };
  POST(BASE_URL, body).then(() => location.reload());
});

GET(BASE_URL).then((data) => {
  data.map((serie) => {
    const imgOrPlaceholder = serie.poster || "https://picsum.photos/200/300";

    try {
      createCard(
        document.body,
        imgOrPlaceholder,
        serie.title,
        serie.id,
        serie.year
      );
    } catch (error) {
      console.log(error);
    }
  });
});

deleteInputEl.addEventListener("input", (eventInput) => {
  removeSerieBtnEl.addEventListener("click", (eventClick) => {
    DELETE(BASE_URL, eventInput.target.value).then(() => location.reload());
  });
});
