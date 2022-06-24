// Esercizi
// Creare un piccolo counter
// Partiamo dal solo body in HTML

// Generiamo da JS due bottoni ed un DIV
// Inseriamo gli elementi a schermo
// Ne div avremo sempre a schermo lo stato del nostro counter ("1" oppure "2" oppure "3", ...)
// Aggiungere al primo bottone la funzionalità di incremento
// Aggiungere al secondo bottone la funzionalità di decremento
// Bonus:

// mettiamo un limite di decremento a 0
// mettiamo un limite di incremento a 10
// Super bonus:

// Rimuovere il codice duplicato

//>>

let counter = 0;

const $CounterDiv = document.createElement("div");
const $buttonUp = document.createElement("button");
const $buttonDown = document.createElement("button");
document.body.append($CounterDiv, $buttonUp, $buttonDown);
$CounterDiv.innerText = counter;
$buttonUp.innerText = "CounterUp";
$buttonDown.innerText = "CounterDown";

//style
document.body.querySelector("div").style.fontSize = "x-large";
document.body.style.marginTop = "100px";
document.body.style.textAlign = "center";
//
const counterUp = () => {
  if (counter < 10) {
    counter += 1;
    $buttonDown.innerText = "CounterDown";
    $CounterDiv.innerText = counter;
  } else if (counter == 10) {
    $buttonUp.innerText = "Fine :)";
  }
};

const CounterDown = () => {
  if (counter > 0) {
    counter -= 1;
    $CounterDiv.innerText = counter--;
    $buttonDown.innerText = "CounterDown";
    $buttonUp.innerText = "CounterUp";
  } else if (counter == 0) {
    $CounterDiv.innerText = counter;
    $buttonDown.innerText = "Niente negativi qui!";
  }
};

$buttonUp.addEventListener("click", counterUp);

$buttonDown.addEventListener("click", CounterDown);
