// //Esercizio base + Bonus track fino al punto 3 (aggiungere btn per eliminare i task)

// const taskInput = document.querySelector(".taskInput");

// const inputBtn = document.querySelector(".inputBtn");

// const taskList = document.querySelector(".taskList");

// const deleteBtn = document.querySelector(".deleteBtn");

// const taskTime = `${new Date().getHours()}:${new Date().getMinutes()}`;

// function taskCreator() {
//   taskList.innerHTML += `<li><input type="checkbox"><span>${taskInput.value}</span><br>
//       <span>Task aggiunta alle ${taskTime} </span>
//       <button class="deleteBtn">Elimina</button></li>`;
// }

// inputBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   taskCreator();
//   taskInput.value = "";
// });

// taskList.addEventListener("click", function (event) {
//   if (event.target.className === "deleteBtn") {
//     event.target.closest("li").remove();
//   }
// });

//>>>>>>>>>>>>>>>>

//Esercizio eseguito su oggetti. I task rimangono nella localStorage ma non vengono eliminati dal tasto

const taskInput = document.querySelector(".taskInput");

const inputBtn = document.querySelector(".inputBtn");

const taskList = document.querySelector(".taskList");

const deleteBtn = document.querySelector(".deleteBtn");

//Stato pagina al refresh

for (const [key, value] of Object.entries(localStorage).sort()) {
  taskList.innerHTML += `<li><input type="checkbox">
  <span>${value}</span><br>
  <button class="deleteBtn">Elimina</button></li>`;
}

// oggetto tast
const task = {
  _taskContent: [],

  get taskText() {
    return this._taskContent;
  },
  set taskText(value) {
    this._taskContent = value;
    localStorage.setItem(
      `${new Date().toLocaleTimeString()}`,
      `${this._taskContent}`
    );
  },

  render() {
    taskList.innerHTML += `<li><input type="checkbox">
      <span>${this._taskContent}</span><br>
      <button class="deleteBtn">Elimina</button></li>`;
  },
};

inputBtn.addEventListener("click", function (event) {
  event.preventDefault();

  let date = new Date();
  let day = date.toDateString();
  let time = date.toLocaleTimeString();
  let milliseconds = date.getMilliseconds();
  let completeDate = `${day} ${time}`;

  task.taskText = `${taskInput.value} <br><br> ${completeDate}`;
  task.render();
  taskInput.value = "";
});

taskList.addEventListener("click", function (event) {
  if (event.target.className === "deleteBtn") {
    event.target.closest("li").remove();
  }
});
