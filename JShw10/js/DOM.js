import { todoKeys, currentYear } from "./const.js";
import { createTodo, changeTodoStyleById, deleteTodoById} from "./servese.js";
import { setTodosToLocalStorage } from "./storage.js"

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todosElement = document.querySelector(".todos");

const createTodoElement = (todo) => {
    const list = document.createElement("li");
    list.classList.add("todo");
    list.dataset.id = todo[todoKeys.id];
    list.innerHTML = `
    <div class="todos-text">${todo[todoKeys.text]}</div>
    <p class="todos-year">${todo[todoKeys.year]}</p>
    <div class="todos-actions">
            <button class="button-complete button">&#10004</button>
            <button class="button-delete button">&#10006</button>
    </div>
    `;
    return list;
}

export const RenderTodos = (todos) => {
    todosElement.innerHTML = "";
    todos.forEach(todo => {
        const todoElement = createTodoElement(todo);
        if (todo[todoKeys.is_completed]) {
            todoElement.classList.add("completed")
        }
        todosElement.prepend(todoElement);
    });
};

    const handleCreateTodo = (todos, text) => {
        const year = currentYear;
        const newTodo = createTodo(todos, text, year);
        const todoElement = createTodoElement(newTodo);
        document.querySelector(".todos").append(todoElement);
        setTodosToLocalStorage(todos);
        return newTodo;
};

export const initTodoHandlers = (todos) => {
    form.addEventListener("submit", event => {
    event.preventDefault();

    const text = input.value.trim();
    if ( !text) return;
    handleCreateTodo(todos, text);
    input.value = "";
});


todosElement.addEventListener("click", ({target}) => {
    const todo = event.target.closest(".todo")
    if (!todo) return;
    console.log(todo);

    const todoId = Number(todo.dataset.id);

    if (target.matches(".button-complete")) {
        changeTodoStyleById(todos, todoId );
        setTodosToLocalStorage(todos);
        todo.classList.toggle("completed");
    };

    if (target.matches(".button-delete")) {
        deleteTodoById(todos, todoId );
        setTodosToLocalStorage(todos);
        todo.remove();
    };
});
}

