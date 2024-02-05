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

let todos = JSON.parse(localStorage.getItem("todos")) || [];

const addTodo = (task) => {
  const newTodo = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
    value: task.value,
    checked: false
  };
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
  rendertodoListData();
};

const deleteTodo = (task) => {
  todos = todos.filter((todo) => todo.id !== task.id);
  localStorage.setItem("todos", JSON.stringify(todos));
  rendertodoListData();
};

const toggleTodoStatus = (task) => {
  todos = todos.map((todo) => {
    if (todo.id === task.id) {
      return { ...todo, checked: !todo.checked };
    }
    return todo;
  });

  localStorage.setItem("todos", JSON.stringify(todos));
  rendertodoListData();
};

const updateTodo = (id, title) => {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, title: title };
    }
    return todo;
  });
  localStorage.setItem("todos", JSON.stringify(todos));
};
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
  todos.forEach((item) => {
    let todoItem = document.createElement("div");
    todoItem.className =
      "flex gap-2 w-full bg-slate-100 px-6 items-center rounded-lg h-14 border border-darkBlue md:h-10 mb-4";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "w-6 h-6  md:h-4 md:w-4";
    checkbox.checked = item.checked;
    checkbox.addEventListener("change", function () {
      toggleTodoStatus(item);
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
