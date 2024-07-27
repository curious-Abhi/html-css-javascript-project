document.addEventListener(`DOMContentLoaded`, () => {
  const form = document.getElementById("to-do-list");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    addtask(taskInput.value);
    taskInput.value = "";
  });

  function addtask(task) {
    if (task.trim() === "") {
      return;
    }
    const li = document.createElement("li");
    li.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  }
});
