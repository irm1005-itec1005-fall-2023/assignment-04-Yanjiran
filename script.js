/* Assignment 04: Finishing a Todo List App*/




// Variables
const todoTasks = [];

const todoList = document.querySelector("todo-list-ul");

const todoForm = document.querySelector("todoInputBox");

const todoInput = document.querySelector("todo-input");





// Functions

function addTaskItem(event) {
    event.preventDefault();
    const taskInput = todoInput.value;
    todoTasks.push(taskInput);
    rednerList();
    todoForm.reset();
}


function createTodoItem() {
    // Create <li> element
    let listItem = document.createElement('li');
    listItem.className = 'todo-item-li';

    // Create the <div> element with class 'task-item'
    let taskItemDiv = document.createElement('div');
    taskItemDiv.className = 'task-item';

    // Create the <p> element with class 'todo-item-content'
    let todoItemContent = document.createElement('p');
    todoItemContent.className = 'todo-item-content';
    todoItemContent.textContent = todoInput; // You can change this text

    // Create the <input> element with type 'button' and class 'task-delete'
    let deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.className = 'task-delete';
    deleteButton.value = 'delete-item';

    // Append the <p> and <input> elements to the <div> element
    taskItemDiv.appendChild(todoItemContent);
    taskItemDiv.appendChild(deleteButton);

    // Append the <div> element to the <li> element
    listItem.appendChild(taskItemDiv);

    // Append the <li> element to the <ul> (assuming your <ul> has an id of 'todo-list')
    document.getElementById('todo-list').appendChild(listItem);
}

}


function renderList() {
    while(todoList.firstChild) {
        todoList.removeChild(todoList.firstChild)
    }

    for(let i = 0; i < todoTasks.length; i++) {
        const listItem = document.createElement(createTodoItem())

        if(i === todoTasks.length - 1) {
            listItem.classList.add("new-item-annimate");
        }

        todoList.appendChild(listItem);
    }
}

