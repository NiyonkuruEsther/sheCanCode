let tasks = [];

function addTask(taskName) {
  tasks.push({ name: taskName, completed: false });
  updateTaskList();
}

function toggleTaskStatus(index) {
  tasks[index].completed = !tasks[index].completed;
  updateTaskList();
}

function removeCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed);
  updateTaskList();
}

function updateTaskList() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTaskStatus(index));

        const taskName = document.createElement("span");
        taskName.textContent = task.name;
        if (task.completed) {
            taskName.style.textDecoration = "line-through";
        }

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskName);
        taskList.appendChild(taskItem);
    });
} 
let addTaskBtn = document.getElementById("add-task-btn");
let addTaskInput = document.getElementById("add-task-input");

addTaskBtn.addEventListener("click", () => {
  addTask(addTaskInput.value);
});

addTask("Task 1");
addTask("Task 2");
addTask("Task 3");
