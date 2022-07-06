// Dato un oggetto prodotto come quello dell'esempio calcoliamo il costo della variante con
// tutti gli addon attivi facendo la somma di tutti i values dentro product.addons.
// Usiamo Object.values per ottenere i costi aggiuntivi da sommare al product.price.

// const product = {
//   id: 1,
//   name: "TV",
//   price: 40,
//   addons: {
//     decoder: 10,
//     qled: 40,
//     stereo: 20
//   }
// };
// const fullOptionalPrice = 0; // usiamo Object.values per sommare ed ottenere -> 110

const product = {
  id: 1,
  name: "TV",
  price: 40,
  addons: {
    decoder: 10,
    qled: 40,
    stereo: 20,
  },
};

const optionaPrices = Object.values(product.addons);
const fullOptionalPrice = optionaPrices.reduce(
  (accumulatore, elementoCorrente) => accumulatore + elementoCorrente,
  product.price
);

console.log(fullOptionalPrice);
