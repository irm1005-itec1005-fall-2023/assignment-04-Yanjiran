/* Assignment 04: Finishing a Todo List App*/




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
  todoTasks.push(taskInput);
  renderList();
  todoForm.reset();
}

  // Create task item in HTML
function createTodoItem(taskInput) {
  // Create <li> element
  let listItem = document.createElement('li');
  listItem.className = 'todo-item-li';
  
  // Create <p> with class 'todo-item-content'
  let todoItemContent = document.createElement('p');
  todoItemContent.className = 'todo-item-content';
  todoItemContent.textContent = taskInput; // Use taskInput, not todoInput
  
  // Create <input> with type 'button' and class 'task-delete'
  let deleteButton = document.createElement('input');
  deleteButton.type = 'button';
  deleteButton.className = 'task-delete';
  deleteButton.value = 'delete-item';
  
  // Append <p> and <input> to <li>
  listItem.appendChild(todoItemContent);
  listItem.appendChild(deleteButton);

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

function removeTask(index) {
  // Preserve completion status before removing the task
  const isCompleted = todoList.children[index].querySelector('.todo-item-content').classList.contains('task-complete');
  todoTasks.splice(index, 1);
  renderList();

  // If the task was completed, reapply the completion status
  if (isCompleted) {
    const lastTask = todoList.children[todoList.children.length - 1];
    lastTask.querySelector('.todo-item-content').classList.add('task-complete');
  }
}

// Function to handle delete button click
function handleDeleteButtonClick(event) {
  if (event.target.classList.contains('task-delete')) {
    // Get the index of the task in the list
    const index = Array.from(event.target.closest('ul').children).indexOf(event.target.closest('li'));

    // Remove the task without affecting completion status
    removeTask(index);
  }
}

// Function to handle marking a task as complete
function markTaskComplete(event) {
  const clickedElement = event.target;

  // Check if the clicked target has the class 'todo-item-content'
  if (clickedElement.classList.contains('todo-item-content')) {
    // Toggle the background color when clicked
    clickedElement.classList.toggle('task-complete');
  }
}



//========= Event Listeners ===========//
todoForm.addEventListener("submit", addTaskItem);
todoList.addEventListener('click', handleDeleteButtonClick);
todoList.addEventListener('click', markTaskComplete);


//======= Initialization/Execution =========//
renderList();