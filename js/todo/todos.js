var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

// var todos = [
//     "Fazer café",
//     "Estudar Javascript",
//     "Acessar comunidade da Rocketseat"
// ];
var todos = JSON.parse(localStorage.getItem("list_todos"));

function renderTodos() {
    listElement.innerHTML = ""; // remove all items first

    for (todo of todos) {
        var checkboxElement = document.createElement("input");
        checkboxElement.setAttribute("type", "checkbox");

        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo + " ");

        var linkElement  = document.createElement("a");
        var linkText = document.createTextNode("Excluir");

        var position = todos.indexOf(todo);

        linkElement.setAttribute("href", "#");
        linkElement.setAttribute("onclick", "deleteTodo(" + position + ")"); 

        linkElement.appendChild(linkText);

        todoElement.appendChild(checkboxElement);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
        saveToStorage();
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(position) {
    todos.splice(position, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos)); 
}