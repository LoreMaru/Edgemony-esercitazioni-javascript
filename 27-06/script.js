// Esercizio
// Sulla base dell'esercitazione del giorno, creare una pagina che mostri una navbar. Questa deve visualizzare:

// > Un nome utente, preso da prompt salvi sul localStorage
// > Lo stesso nome sarà visualizzato all'interno di questa navbar come testo
// > Gli elementi HTML utilizzati dovranno essere dichiarati via JavaScript
// > Bisogna fare un controllo (try) sul nome utente stesso,
// > se non presente nel localStorage allora mostri un errore in console, e successivamente aggiunto (catch)

const userName = prompt("inserisci il tuo nome utente");

const newEl = (el) => document.createElement(el);

const navBar = newEl("div");
const logo = newEl("img");
const home = newEl("a");
const about = newEl("a");
const contatti = newEl("a");
const user = newEl("p");

document.body.append(navBar);
navBar.append(logo, home, about, contatti, user);

//content
logo.setAttribute("alt", "logo");
logo.setAttribute("src", "./logoipsum-logo-63.svg");
home.innerText = "HOME";
about.innerText = "ABOUT";
contatti.innerText = "CONTATTI";
const links = document.querySelectorAll("a");
for (i = 0; i < links.length; i++) {
  links[i].setAttribute("href", "#");
  //link style
  links[i].style.textDecoration = "none";
}

//navbar style
document.body.querySelector("div").style.height = "50px";
document.body.querySelector("div").style.display = "flex";
document.body.querySelector("div").style.justifyContent = "space-between";
document.body.querySelector("div").style.backgroundColor = "lightblue";
document.body.querySelector("div").style.borderBottomLeftRadius = "25px";
document.body.querySelector("div").style.borderTopRightRadius = "25px";
document.body.querySelector("div").style.textAlign = "right";
document.body.querySelector("div").style.padding = "15px";

try {
  localStorage.clear();
  if (!localStorage.getItem("userName")) {
    localStorage.setItem("userName", userName);
    user.innerText = "Ciao " + userName;
  }
  if (userName === null || userName == "") {
    throw new Error();
  }
} catch (error) {
  localStorage.setItem("userName", "guest");
  user.innerText = "Ciao ospite";
  throw new Error(
    "User Name non inserito. effettuato accesso in modalità Ospite"
  );
}
