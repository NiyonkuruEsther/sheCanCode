window.onload = rendertodoListData;

document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.querySelector('a[href="#home"]');
  const addItemLink = document.querySelector('a[href="#add-item-section"]');

  document.getElementById("add-item-section").style.display = "none";

  homeLink.onclick = function () {
    document.getElementById("home").style.display = "block";
    document.getElementById("add-item-section").style.display = "none";
  };

  addItemLink.onclick = function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("add-item-section").style.display = "block";
  };
});

const homeSection = document.getElementById("home");
let todoListData = [];

let todoList = JSON.parse(localStorage.getItem("todoListData")) || [];

function saveTodoList(task) {
  let existingTodoList = JSON.parse(localStorage.getItem("todoListData")) || [];
  let newId =
    existingTodoList.length > 0
      ? existingTodoList[existingTodoList.length - 1].id + 1
      : 0;

  existingTodoList.push({
    id: newId,
    value: task.value,
    checked: false
  });

  localStorage.setItem("todoListData", JSON.stringify(existingTodoList));
}

const addTodo = (task) => {
  console.log("yolls");
  if (task.value.length) {
    todoList.push(task);
    saveTodoList(task);
    rendertodoListData();
  } else {
    empty = true;
  }
};

const deleteTodo = (task) => {
  console.log(task);
  let newList = todoListData.filter((item) => item.id !== task.id);
  localStorage.setItem("todoListData", JSON.stringify(newList));
  rendertodoListData();
};

const checkTodo = (task) => {
  todoList = todoList.map((item) => {
    console.log(task, item, "checked");

    if (item.id === task.id) {
      return { ...task, checked: !task.checked };
    }
  });
  console.log(todoList.find((item) => item.id === 1), "item");
  rendertodoListData();
};

function editTodoText(taskId, newText) {
  todoList = todoList.map((task) => {
    if (task.id === taskId) {
      return { ...task, value: newText };
    } else {
      return task;
    }
  });
  rendertodoListData();
}

const addItem = document.getElementById("add-item");
const newItemInput = document.getElementById("new-item-input");
addItem.addEventListener("click", () => {
  const inputValue = newItemInput.value.trim();
  if (inputValue) {
    addTodo({
      id: todoList.length + 1,
      value: inputValue,
      checked: false
    });
    newItemInput.value = "";
  }
});

function rendertodoListData() {
  homeSection.innerHTML = "";
  todoList.forEach((item) => {
    let todoItem = document.createElement("div");
    todoItem.className =
      "flex gap-2 w-full bg-slate-100 px-6 items-center rounded-lg h-14 border border-darkBlue md:h-10 mb-4";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "w-6 h-6  md:h-4 md:w-4";
    checkbox.checked = item.checked;
    checkbox.addEventListener("change", function () {
      checkTodo(item);
    });

    let todoActions = document.createElement("div");
    todoActions.className = "flex gap-4";

    let todoText = document.createElement("p");
    todoText.textContent = item.value;
    todoText.className = `w-fit max-w-xs py-1 px-3 focus:outline-none ${
      item.checked ? "line-through" : ""
    }`;
    todoText.contentEditable = true;
    todoText.addEventListener("change", function () {
      editTodoText(item, todoText.textContent);
    });

    let deleteButton = document.createElement("img");
    deleteButton.src =
      "https://cdn-icons-png.flaticon.com/128/6861/6861362.png";
    deleteButton.className = "w-6 h-6 cursor-pointer md:h-4 md:w-4";
    deleteButton.addEventListener("click", function () {
      deleteTodo(item);
    });

    let todoDiv = document.createElement("div");
    todoDiv.className = "flex justify-between gap-2 w-full items-center";

    todoDiv.appendChild(todoText);
    todoDiv.appendChild(todoActions);
    todoActions.appendChild(deleteButton);
    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoDiv);

    homeSection.appendChild(todoItem);
  });
}
rendertodoListData();
console.log(localStorage.getItem("todoListData"), todoListData);
