const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Please enter a task!");

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="task-text" onclick="toggleComplete(this)">${taskText}</span>
    <div class="actions">
      <button onclick="editTask(this)">Edit</button>
      <button onclick="deleteTask(this)">Delete</button>
    </div>
  `;
  taskList.appendChild(li);
  taskInput.value = "";
}

function toggleComplete(taskSpan) {
  taskSpan.parentElement.classList.toggle("completed");
}

function editTask(button) {
  const li = button.parentElement.parentElement;
  const span = li.querySelector(".task-text");
  const newText = prompt("Edit your task:", span.textContent);
  if (newText !== null && newText.trim() !== "") {
    span.textContent = newText.trim();
  }
}

function deleteTask(button) {
  button.parentElement.parentElement.remove();
}
