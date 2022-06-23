// Timeout
// Stampiamo dopo 1,5,10 secondi l'orario corrente in questo formato

// "Ora" : "Minuti"
// possiamo scrivere 3 timeout diversi, oppure come bonus usiamo un array con i tempi [1,5,10].forEach

const arrayTimer = [1000, 5000, 10000];

//normale

// setTimeout(() => {
//   console.log(new Date().getHours() + ":" + new Date().getMinutes());
// }, 1000);

// setTimeout(() => {
//   console.log(new Date().getHours() + ":" + new Date().getMinutes());
// }, 5000);

// setTimeout(() => {
//   console.log(new Date().getHours() + ":" + new Date().getMinutes());
// }, 10000);

//avanzato (aggiunti secondi per renderlo più visibile nel console.log)

// const orologio = arrayTimer.map((item) =>
//   setTimeout(() => {
//     console.log(
//       new Date().getHours() +
//         ":" +
//         new Date().getMinutes() +
//         ":" +
//         new Date().getSeconds()
//     );
//   }, item)
// );

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Interval
// Fare il console.log analogo a quello mostrato su time.is

// const delay = 1000;
// setInterval(() => {
//   console.clear();
//   console.log(
//     new Date().getHours() +
//       ":" +
//       new Date().getMinutes() +
//       ":" +
//       new Date().getSeconds()
//   );
// }, delay);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// dato un array [42, 23, 1, 7, 12, 99] estraiamo ogni secondo, come se fosse un tombola, un numero.
//Cancelliamo l'interval quando avremo pescato tutti i numeri possibili.
//tip: Contiamo quante volte abbiamo fatto parte l'intervallo

const numeriEstratti = [42, 23, 1, 7, 12, 99];

// let index = 0;
// let timeId = setInterval(function () {
//   console.log(numeriEstratti[index++]);
// }, 1000);

// function stopInterval() {
//   clearInterval(timeId);
// }

// setTimeout(stopInterval, 1000 * numeriEstratti.length);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// DOM
// Prendiamo l'esercizo 1 di Interval e stampiamo la data nel body usando document.body.innerHTML = "...""

// const delay = 1000;

// function timeIsClone() {
//   const ore = new Date().getHours();
//   const minuti = new Date().getMinutes();
//   const secondi = new Date().getSeconds();
//   document.body.innerHTML = `<h1> ${ore}.${minuti}.${secondi}</h1>`;
// }
// const timeStamp = setInterval(timeIsClone, 1000);
