//Consegna 1: creare una calcolatrice usando le funzioni, se possibile funzione pura.
//Pseudocodice:
//-prendere un input numerico
//  -prenderne un secondo
//-prendere un input relativo all'operazione da eseguire
//-ritornare il risultato dell'operazione

function operation() {
  const num1 = parseInt(prompt("inserisci un numero"));
  const num2 = parseInt(prompt("inserisci un numero"));
  const operation = prompt("Che operazione vuoi svolgere?");

  switch (operation) {
    case "+":
      alert(num1 + num2);
      break;
    case "-":
      alert(num1 - num2);
      break;
    case "*":
      alert(num1 * num2);
      break;
    case "/":
      alert(num1 / num2);
      break;
    default:
      alert("Non hai selezionato alcuna operazione valida. Usa + - * oppure /");
  }
}

operation();

//Consegna2: giocare con gli oggetti

// * Object.assign() -> copia tutte le proprietà da uno o più oggetti sorgente ad un oggetto target,
//ritorna l'oggetto target modificato. Se nel target sono presenti chiavi con lo stesso nome le sovrascrive:

const target = {
  primoNumero: 1,
  secondoNumero: 2,
  terzoNumero: 3,
};

const sorgente = {
  primaLettera: "a",
  secondaLettera: "b",
  terzaLettera: "c",
};

const copiaModificata = Object.assign(target, sorgente);

console.log(copiaModificata);

// * Object.defineProperty() definisce o modifica una proprietà in un oggetto, ritorna l'oggetto:

const cervello = {};

Object.defineProperty(cervello, "neuroni", {
  value: 2,
});

console.log(cervello);

// * Object.defineProperties, come il precedente ma permette di aggiungere/modificare più proprietà contemporaneamente:

const faccia = {};

Object.defineProperties(faccia, {
  occhi: {
    value: 2,
  },
  bocca: {},
});

console.log(faccia);

// * Object.freeze() impedisce che un oggetto possa subire modifiche (che sia aggiungere o rimuovere chiavi o valori).
//ritorna lo stesso oggetto:

const person = {
  nome: "Jack",
  cognome: "Torrance",
};

Object.freeze(person);

// * Object.isFrozen() serve a sapere se un oggetto è frizzato (vedere precedente):

console.log(Object.isFrozen(person));

// * Object.keys() ritorna un array contenente le chiavi di un oggetto selezionato:

const oggettoGenerico = {
  a: "stringa",
  b: 42,
  c: "altra stringa",
};

console.log(Object.keys(oggettoGenerico));
