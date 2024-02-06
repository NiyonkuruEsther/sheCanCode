const arr = [];

const addTask = (task) => {
  return arr.push({ value: task, completed: false });
};

const removetask = (index) => {
  return arr.splice(index, 1);
};
const sortTask = () => {
  return arr.sort((a, b) => a.value.localeCompare(b.value));
};

const displayIncomplete = () => {
  let filtered = arr.filter((item) => item.completed === false);
  return filtered.length;
};

const markCompleted = (index) => {
  let task = arr.at(index);
  return (task = { ...task, completed: true });
};
addTask("eat");
addTask("run");
addTask("zreadh");
addTask("rea");
addTask("reh");

removetask(1);
displayIncomplete();
console.log(sortTask());
