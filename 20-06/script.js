// ---- Esercizi 20/06

// 1 -> Scriviamo una funzione che accetta due parametri e torna la somma di entrambi
// sum(1,3); -> 4

// 2 -> Scriviamo una versione miglirata della prima che controlla l'esistenza dei due parametri e che siano numeri
// sum(1) -> Errore in console che spiega cosa non va

// 3 -> Scriviamo come per il punto due, anche per moltiplicazione, divisione, e sottrazione
// div(2,0) -> il programma di deve dire che non posso dividere per 0

// 4 -> Scriviamo una funzione che possa eseguire le 4 precedenti
// es:
// operation( sum, 1 , 3 ) -> 4
// operation( div, 1 , 0 ) -> Errore: non divisibile per zero :(

function sum(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    console.log(num1 + num2);
  } else {
    console.error("Errore, inserire due numeri");
  }
}

function subt(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    console.log(num1 - num2);
  } else {
    console.error("Errore, inserire due numeri");
  }
}

function mult(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    console.log(num1 * num2);
  } else {
    console.error("Errore, inserire due numeri");
  }
}

function div(num1, num2) {
  if (num2 === 0) {
    console.warn("Errore: non divisibile per zero :(");
  } else if (typeof num1 === "number" && typeof num2 === "number") {
    console.log(num1 / num2);
  } else {
    console.error("Errore, inserire due numeri");
  }
}

function operations(operatoreFn, num1, num2) {
  if (typeof operatoreFn === "function") {
    operatoreFn(num1, num2);
  } else {
    console.log("Non hai inserito un'operazione valida");
  }
}

// operations(sum, 1, 3);
// operations(subt, 3, 2);
// operations(mult, 3, 2);
operations(div, 0, 6);
operations(div, 3, 0);
