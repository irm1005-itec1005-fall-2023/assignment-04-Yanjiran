
//======== Variables ===========//
const todoTasks = [];
const todoList = document.querySelector("#todo-list-ul");
const todoForm = document.querySelector(".todoInputBox");
const todoInput = document.querySelector("#todo-input");

//========= Functions ============//
// Adds new task
function addTaskItem(event) {
  event.preventDefault();
  const taskInput = todoInput.value;
  todoTasks.push({ text: taskInput, completed: false });
  renderList();
  todoForm.reset();
}

// Create task item in HTML
function createTodoItem(task) {
  // Create <li> element
  let listItem = document.createElement('li');
  listItem.className = 'todo-item-li';

  // Create <p> with class 'todo-item-content'
  let todoItemContent = document.createElement('p');
  todoItemContent.className = 'todo-item-content';

  // Create <span> with class 'task-text' for the task content
  let taskText = document.createElement('span');
  taskText.className = 'task-text';
  taskText.textContent = task.text;

  // Append <span> to <p>
  todoItemContent.appendChild(taskText);

  // Create <input> with type 'button' and class 'task-delete'
  let deleteButton = document.createElement('input');
  deleteButton.type = 'button';
  deleteButton.className = 'task-delete';
  deleteButton.value = 'delete-item';

  // Append <p> and <input> to <li>
  listItem.appendChild(todoItemContent);
  listItem.appendChild(deleteButton);

  // Set completion status and styles
  if (task.completed) {
    todoItemContent.classList.add('task-complete');
    taskText.classList.add('completed-text');
  }

  return listItem;
}

// Function to render List 
function renderList() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }

  for (let i = 0; i < todoTasks.length; i++) {
    let listItem = createTodoItem(todoTasks[i]);

    if (i === todoTasks.length - 1) {
      listItem.classList.add("new-item-animate");
    }

    todoList.appendChild(listItem);
  }
}

// Function to handle delete button click
function handleDeleteButtonClick(event) {
  if (event.target.classList.contains('task-delete')) {
    // Get index of task in list
    const index = Array.from(event.target.closest('ul').children).indexOf(event.target.closest('li'));

    // Remove task
    todoTasks.splice(index, 1);
    renderList();
  }
}

// Function to handle marking a task as complete
function markTaskComplete(event) {
  const clickedElement = event.target;

  // Check if clicked item has class 'todo-item-content'
  if (clickedElement.classList.contains('todo-item-content')) {
    // Find parent <li> and get its index
    const index = Array.from(clickedElement.closest('ul').children).indexOf(clickedElement.closest('li'));

    // Toggle completion status in todoTasks array
    todoTasks[index].completed = !todoTasks[index].completed;

    renderList();
  }
}

//========= Event Listeners ===========//
todoForm.addEventListener("submit", addTaskItem);
todoList.addEventListener('click', handleDeleteButtonClick);
todoList.addEventListener('click', markTaskComplete);

//======= Initialization/Execution =========//
renderList();
