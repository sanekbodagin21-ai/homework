"use strict"

const todoKeys = {
    id: "id",
    text: "text",
    year: "year",
    is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with ${todoId} not found`
const currentYear = new Date().getFullYear();

const getNewTodoId = (todos) => {
    return todos.reduce( (maxId, todo) =>  Math.max(maxId, todo[todoKeys.id]), 0) + 1;
};

const createTodo = (todos, text, year ) => {
    const newTodo = {
        [todoKeys.id]: getNewTodoId(todos),
        [todoKeys.text]: text, 
        [todoKeys.is_completed]: false,
        [todoKeys.year]: year,
    };
    todos.push(newTodo);
    return newTodo;
};

const changeTodoStyleById = (todos, todoId ) => {
    const todo = todos.find( todo => todo[todoKeys.id] === todoId);
    if (!todo) {
        console.error(errTodoNotFound(todoId));
        return null;
    } else {
    todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
    return todo;
    };
};



const deleteTodoById = (todos, todoId) => {
    const todoIndex = todos.findIndex( (todo) => todo[todoKeys.id] === todoId)
    if (todoIndex === -1) {
        console.error(errTodoNotFound(todoId));
        return todos;
    } else {
        todos.splice(todoIndex, 1);
        return todos;
    }
};

const isOverdue = todo => todo[todoKeys.year] < currentYear 

const deleteOverdueTodos = todos => {
    const initialLength = todos.length;
    for (let i = todos.length - 1; i >= 0; i--) {
        const todo = todos[i];
        if (isOverdue(todo)) {
            deleteTodoById(todos, todo[todoKeys.id]);
        }
    }
    const deletedTodo = initialLength - todos.length;
    if (deletedTodo > 0) {
        console.log(`Removed ${deletedTodo} overdue tasks`)
    } else {
        console.log(`There are no overdue tasks!`)
    }
    return todos;
}

/////////////////////////////////////////////////////////////////////////////

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

    const handleCreateTodo = (todos, text) => {
        const year = new Date().getFullYear();
        const newTodo = createTodo(todos, text, year);
        const todoElement = createTodoElement(newTodo);
        document.querySelector(".todos").append(todoElement);
        return newTodo;
};

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
        todo.classList.toggle("completed");
    };

    if (target.matches(".button-delete")) {
        deleteTodoById(todos, todoId );
        todo.remove();
    };
})