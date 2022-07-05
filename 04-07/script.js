// Spread:
// scrivere una funzione che unisce le proprietà di due oggetti

//>
const obj1 = { foo: "bar", foo2: "bar2" };
const obj2 = { name: "Mio nome", cognome: "mio cognome" };

function merge(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(merge(obj1, obj2));

// Opzionale Miglioriamo la funzione e aggiungiamo una proprietà di nostra scelta. Il tutto deve essere un one-line
// const obj1 = {foo: 'bar'};
// const obj2 = {name: 'Mio nome'};
// // obj1 + obj2 = { foo: 'bar', name: 'Mio nome', altraProp: 'value' };

//>
const obj1b = { foo: "bar", foo2: "bar2" };
const obj2b = { name: "Mio nome", cognome: "mio cognome" };

function merge2(obj1, obj2, altraProp) {
  return { ...obj1, ...obj2, altraProp };
}

console.log(merge2(obj1, obj2, "value"));

// Destructuring:
// Usiamo il filter per prendere solo le stringe >= 10 caratteri da un array,
// usando il destructuring per prendere la length

//>

const arr1 = [
  "ciao",
  "questa stringa ha più di 10 caratteri",
  "questa no",
  "questa-10-",
];

const [...maggioreDi10] = arr1.filter((arr1) => arr1.length >= 10);

console.log(maggioreDi10);

// Get/Set
// Creiamo un oggetto shop come sotto, in cui avere una prop con get/set e:
// leggere _products nel getter
// sovrascrivere _products nel setter
// contestualmente quando usiamo il setter mostriamo tutti i prodotti in innerHTML di body
// shop.products = [{id: 1, name: 'TV', price: 40}, {id: 2, name: 'PC', price: 30}]
// // -> deve mettere dentro il body: <li>TV - 40€</li><li>PC - 30€</li>

// const shop = {
//   _products: [],
//   get products() {

//   },
//   set products(val) {

//   }
// }

const container = document.body.querySelector(".item");

const shop = {
  _products: [],
  get products() {
    return this._products;
  },
  set products(val) {
    this._products = val;
    this.products.map((item, index, array) => {
      const productCard = document.createElement("li");
      productCard.textContent =
        this._products[index].name + " - " + this._products[index].price + "€";
      container.append(productCard);
    });
  },
};

shop.products = [
  { id: 1, name: "TV", price: 40 },
  { id: 2, name: "PC", price: 30 },
  { id: 2, name: "RADIO", price: 20 },
];

console.log(shop.products);
