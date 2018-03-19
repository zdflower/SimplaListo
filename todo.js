const showTodos = document.getElementById("showTodos");

const addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click", addTodo);

function addTodo() {
  const todoText = document.getElementById("todoText");
  const texto = todoText.value;
  todoText.value = '';
  
  showTodos.appendChild(createTodo(texto));
}

function createTodo(text) {
  const newTodo = document.createElement("li");
  newTodo.setAttribute("class", "todo");
  newTodo.addEventListener('click', crossTodo);
  // newTodo.addEventListener('click', deleteTodo);
  newTodo.appendChild(document.createTextNode(text));
  return newTodo;
}

function crossTodo(event) {
  event.currentTarget.style.cssText = "text-decoration-line: line-through";
}

function deleteTodo(event) {
  const todo = event.currentTarget;
  todo.parentNode.removeChild(todo);
}

// Se podría agregar la posibilidad de editar el texto de un todo...