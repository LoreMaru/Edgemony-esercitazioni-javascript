const array = [1, 2, 3, 4, 5, 6, 7, 8];

//>>> ESERCIZIO 1
// Eseguire console.log() di ogni elemento di array

//funzione esterna

logElementi = (item) => {
  return console.log(item);
};

const logger = array.forEach(logElementi);

//funzione interna

const forEachLog = array.forEach((item) => console.log(item));

//>>> ESERCIZIO 2
//Lanciare un console.log() di ogni elemento, dopo un setTimeout di elemento * index

function conunter() {
  let timer = 0;
  array.forEach((item, index) => {
    setTimeout(() => {
      console.log(item);
    }, timer);
    timer = timer + 1000 * index;
  });
}
conunter();

//>>> ESERCIZIO 3
//Tenere dentro l'array solo i numeri pari

function soloPari(item) {
  return item % 2 === 0;
}

const itemPari = array.filter(soloPari);

console.log(itemPari);

//funzione interna

const numeriPari = array.filter(function (item) {
  return item % 2 === 0;
});
console.log(numeriPari);

//>>> ESERCIZIO 4
//Tenere solo i numeri in comune con questo array: [10, 1, 2, 5, 6]

const array2 = [10, 1, 2, 5, 6];

const numeriComuni = array.filter((item) => array2.includes(item));

console.log(numeriComuni);
