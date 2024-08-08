const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

let tasks = [];

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const task = {
      text: taskText,
      completed: false
    };
    tasks.push(task);
    renderTasks();
    taskInput.value = '';
  }
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.classList.toggle('completed', task.completed);
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = task.text;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(index));
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

addTaskButton.addEventListener('click', addTask);