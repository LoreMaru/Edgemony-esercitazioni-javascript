// 1 Scriviamo una funzione che passata al map, dato un array di nomi torna una lista di "indice + Nome". es:

// const names = ['Luca', 'Gabriele'];
// namesToList(names) // -> ['1 - Luca', '2 - Gabriele']

// 2  Scriviamo una funzione che passata al map, converta ogni elemento al proprio indice inverso. es:

// const names = ['Luca', 'Gabriele', 'Richard', 'Roberta'];
// namesToList(names) // -> [3, 2, 1, 0];

// 3 Scriviamo una funzione che passata al map, dato un array ne torni uno al contrario. es:

// const names = ['Luca', 'Gabriele'];
// namesToList(names) // -> ['Gabriele', 'Luca'];

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const names = ["Luca", "Gabriele", "Sara", "Richard", "Roberta"];

//ES1:
const namesAndIndexList = names.map(
  (elements, index) => index + 1 + " - " + elements
);
console.log(namesAndIndexList);

//ES2:
const namesIndexReverse = names.map(
  (_, index, array) => array.length - 1 - index
);
console.log(namesIndexReverse);

//ES3:
const nameReverse = names.map(
  (_, index, array) => array[array.length - 1 - index]
);

console.log(nameReverse);
