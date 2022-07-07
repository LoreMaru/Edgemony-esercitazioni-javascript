//Esercizio base + Bonus track fino al punto 3 (aggiungere btn per eliminare i task)

const taskInput = document.querySelector(".taskInput");

const inputBtn = document.querySelector(".inputBtn");

const taskList = document.querySelector(".taskList");

const deleteBtn = document.querySelector(".deleteBtn");

const taskTime = `${new Date().getHours()}:${new Date().getMinutes()}`;

function taskCreator() {
  taskList.innerHTML += `<li><input type="checkbox"><span>${taskInput.value}</span><br>
      <span>Task aggiunta alle ${taskTime} </span>
      <button class="deleteBtn">Elimina</button></li>`;
}

inputBtn.addEventListener("click", function (event) {
  event.preventDefault();
  taskCreator();
  taskInput.value = "";
});

taskList.addEventListener("click", function (event) {
  if (event.target.className === "deleteBtn") {
    event.target.closest("li").remove();
  }
});
