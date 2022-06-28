// Esercizio
// Sulla base della lezione del giorno, riprendendo la pagina (header) di ieri:

// Aggiunge anche un footer (magari identico all'header se volete)
// Header e Footer devono contenere Nome Utente e il numero totale dei prodotti renderizzati
// Aggiungere section alla pagina che renderizza delle cards:
// https://fakestoreapi.com/products
// Filtro per quantità di prodotto disponisible superiore a 200
// Stile CSS a scelta

import {
  newEl,
  select,
  cardCreator,
  user,
  userName,
  userFooter,
} from "./utility.js";

const container = document.querySelector(".mainContent");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    const filteredPrduct = data
      .filter((product) => product.rating.count > 200)
      .map((product) =>
        cardCreator(
          container,
          product.image,
          product.title,
          product.price,
          product.rating.count,
          product.rating.rate
        )
      );
    user.innerText =
      " Ciao " +
      userName +
      " hai selezionato " +
      filteredPrduct.length +
      " articoli";
    userFooter.innerText = user.innerText;
  });
