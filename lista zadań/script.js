function addTask() {
  const taskText = document.getElementById("new-task").value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task-item";

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  })

  const label = document.createElement("span");
  label.className = "task-label";
  label.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.className = "remove-btn";
  
  removeBtn.addEventListener("click", () => {
    li.remove();
  })

  li.appendChild(label);
  li.appendChild(removeBtn);

  document.getElementById("todo-list").appendChild(li);
  document.getElementById("new-task").value = "";
}

let button = document.getElementById("add-btn");
button.addEventListener("click", addTask);