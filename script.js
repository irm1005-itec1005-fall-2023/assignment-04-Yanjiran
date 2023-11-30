/* Assignment 04: Finishing a Todo List App*/




// Variables
const todoTasks = [];

const todoList = document.querySelector("#todo-list-ul");

const todoForm = document.querySelector(".todoInputBox");

const todoInput = document.querySelector("#todo-input");





// Functions
function addTaskItem(event) {
    event.preventDefault();
    const taskInput = todoInput.value;
    todoTasks.push(taskInput);
    renderList();
    todoForm.reset();
  }
  
  function createTodoItem(taskInput) {
    // Create <li> element
    let listItem = document.createElement('li');
    listItem.className = 'todo-item-li';
  
    // Create <div> with class 'task-item'
    let taskItemDiv = document.createElement('div');
    taskItemDiv.className = 'task-item';
    
    // Create <p> with class 'todo-item-content'
    let todoItemContent = document.createElement('p');
    todoItemContent.className = 'todo-item-content';
    todoItemContent.textContent = taskInput; // Use taskInput, not todoInput
  
    // Create <input> with type 'button' and class 'task-delete'
    let deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.className = 'task-delete';
    deleteButton.value = 'delete-item';
  
    // Append <p> and <input> to <div>
    taskItemDiv.appendChild(todoItemContent);
    taskItemDiv.appendChild(deleteButton);
  
    // Append <div> to <li>
    listItem.appendChild(taskItemDiv);
  
    return listItem;
  }
  
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
  
  todoForm.addEventListener("submit", addTaskItem);
  
  renderList();