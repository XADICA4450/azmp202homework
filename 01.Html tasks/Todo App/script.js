
const todoInput = document.getElementById('todo');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const allTodosBtn = document.querySelector('.all-todos');
const completedTodosBtn = document.querySelector('.completed-todos');
const pendingTodosBtn = document.querySelector('.pending-todos');
const clearAllBtn = document.querySelector('.clear-all');

let todos = [];


addBtn.addEventListener('click', () => {
  const todoText = todoInput.value.trim();
  if (todoText) {
    const todo = {
      text: todoText,
      completed: false
    };
    todos.push(todo);
    todoInput.value = '';  
    renderTodos(); 
  }
});


function renderTodos() {
  todoList.innerHTML = ''; 
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    if (todo.completed) {
      li.classList.add('completed');
    }


    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('click', () => toggleComplete(index));

    const label = document.createElement('label');
    label.textContent = todo.text;

    
    const editIcon = document.createElement('span');
    editIcon.textContent = '✎';
    editIcon.classList.add('edit-icon');
    editIcon.addEventListener('click', () => editTodo(index));

    
    const clearIcon = document.createElement('span');
    clearIcon.textContent = '🗑️';
    clearIcon.classList.add('clear-icon');
    clearIcon.addEventListener('click', () => confirmDelete(index));

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(editIcon);
    li.appendChild(clearIcon);
    todoList.appendChild(li);
  });
}

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}


allTodosBtn.addEventListener('click', () => {
  renderTodos();
});


completedTodosBtn.addEventListener('click', () => {
  const completedTodos = todos.filter(todo => todo.completed);
  renderFilteredTodos(completedTodos);
});


pendingTodosBtn.addEventListener('click', () => {
  const pendingTodos = todos.filter(todo => !todo.completed);
  renderFilteredTodos(pendingTodos);
});


function renderFilteredTodos(filteredTodos) {
  todoList.innerHTML = ''; 
  filteredTodos.forEach((todo, index) => {
    const li = document.createElement('li');
    if (todo.completed) {
      li.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('click', () => toggleComplete(index));

    const label = document.createElement('label');
    label.textContent = todo.text;

    li.appendChild(checkbox);
    li.appendChild(label);
    todoList.appendChild(li);
  });
}


clearAllBtn.addEventListener('click', () => {
  todos = [];
  renderTodos();
});


function editTodo(index) {
  const newText = prompt('Todo yu düzeldin:', todos[index].text);
  if (newText !== null && newText.trim() !== '') {
    todos[index].text = newText;
    renderTodos();
  }
}


function confirmDelete(index) {
  const isConfirmed = confirm('Bu todo yu silmek istediğinizden əminsiz?');
  if (isConfirmed) {
    todos.splice(index, 1); 
    renderTodos(); 
  }
}
