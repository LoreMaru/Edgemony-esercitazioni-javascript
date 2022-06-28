// Esercizio
// Sulla base della lezione del giorno, riprendendo la pagina (header) di ieri:

// Aggiunge anche un footer (magari identico all'header se volete)
// Header e Footer devono contenere Nome Utente e il numero totale dei prodotti renderizzati
// Aggiungere section alla pagina che renderizza delle cards:
// https://fakestoreapi.com/products
// Filtro per quantità di prodotto disponisible superiore a 200
// Stile CSS a scelta

const userName = prompt("inserisci il tuo nome utente");

const newEl = (el) => document.createElement(el);
const select = (el) => document.querySelector(el);
const body = document.querySelector("body");

localStorage.setItem("userName", userName);

//navbar
// const navBar = newEl("nav");
const logo = newEl("img");
const about = newEl("a");
const user = newEl("p");

select(".mainNavbar").append(logo, about, user);

//content navbar
logo.setAttribute("alt", "logo");
logo.setAttribute("src", "./logoipsum-logo-63.svg");
about.innerText = "ABOUT";
const links = document.querySelectorAll("a");
for (let i = 0; i < links.length; i++) {
  links[i].setAttribute("href", "#");
}

user.innerText = " Ciao " + userName;

//card
const cardCreator = (parent, imgLink, title, price, count, rating) => {
  const cardEl = newEl("div");
  const imgProductEl = newEl("img");
  const titleEl = newEl("h3");
  const priceEl = newEl("p");
  const countEl = newEl("p");
  const ratingEl = newEl("p");

  titleEl.textContent = title;
  priceEl.textContent = "Price: " + price;
  countEl.textContent = "Count: " + count;
  ratingEl.textContent = "Rate: " + rating;

  imgProductEl.setAttribute("alt", title);
  imgProductEl.setAttribute("src", imgLink);

  cardEl.className = "productCard";

  cardEl.append(imgProductEl, titleEl, priceEl, countEl, ratingEl);
  parent.appendChild(cardEl);
};

//footer
const footer = newEl("footer");
const userFooter = newEl("p");
const logoFooter = newEl("img");

document.body.append(footer);
footer.append(userFooter, logoFooter);

footer.className = "mainFooter";

// //content footer
userFooter.innerText = "Ciao " + userName;
logoFooter.setAttribute("alt", "logo");
logoFooter.setAttribute("src", "./logoipsum-logo-63.svg");

try {
  if (
    !localStorage.getItem("userName") ||
    userName === null ||
    userName == ""
  ) {
    throw new Error(
      "User Name non inserito. effettuato accesso in modalità Ospite"
    );
  }
} catch (error) {
  localStorage.setItem("userName", "guest");
  user.innerText = " Ciao ospite";
  userFooter.innerText = "Ciao ospite";
  console.error(error);
  localStorage.clear();
}

export { newEl, select, cardCreator, user, userName, userFooter };
